import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PersonalInfo } from './entities/personal_info.entity';
import { Experience } from './entities/experience.entity';
import { ExperienceDetail } from './entities/experience_details.entity';
import { Skill } from './entities/skills.entity';
import { Education } from './entities/education.entity';
import { Project } from './entities/projects.entity';
import { ProjectTechnology } from './entities/project_technologies.entity';
import { Publication } from './entities/publications.entity';
import { Language } from './entities/languages.entity';
import { Interest } from './entities/interests.entity';
import { CvResponseDTO } from './dto/CvResponseDTO.dto';
@Injectable()
export class CvService {
  private readonly logger = new Logger(CvService.name);

  constructor(
    @InjectRepository(PersonalInfo)
    private personalInfoRepo: Repository<PersonalInfo>,
    @InjectRepository(Experience)
    private experienceRepo: Repository<Experience>,
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
  ) {}

  async getCvData(cvId: number = 1): Promise<CvResponseDTO> {
    this.logger.log(`Fetching CV data for ID: ${cvId}`);

    // Fetch the main personal info entity with all its related data
    const cv = await this.personalInfoRepo
      .createQueryBuilder('personalInfo')
      .leftJoinAndSelect('personalInfo.experience', 'experience')
      .leftJoinAndSelect('personalInfo.education', 'education')
      .leftJoinAndSelect('personalInfo.skills', 'skills')
      .leftJoinAndSelect('personalInfo.projects', 'projects')
      .leftJoinAndSelect('personalInfo.publications', 'publications')
      .leftJoinAndSelect('personalInfo.languages', 'languages')
      .leftJoinAndSelect('personalInfo.interests', 'interests')
      .leftJoinAndSelect('experience.details', 'experienceDetails')
      .leftJoinAndSelect('projects.technologies', 'projectTechnologies')
      .where('personalInfo.id = :id', { id: cvId })
      .getOne();

    if (!cv) {
      this.logger.warn(`CV with ID ${cvId} not found.`);
      throw new NotFoundException(`CV with ID ${cvId} not found`);
    }

    // Map the database entities to the DTO for the frontend
    const response: CvResponseDTO = {
      name: cv.name,
      jobTitle: cv.jobTitle,
      profileImage: cv.profileImageUrl,
      summary: cv.summary,
      contact: {
        email: cv.email,
        phone: cv.phone,
        location: cv.location,
        linkedin: cv.linkedinUrl,
        github: cv.githubUrl,
      },
      experience: cv.experience.map((exp) => ({
        company: exp.company,
        title: exp.title,
        startDate: exp.startDate,
        endDate: exp.endDate,
        years: exp.years,
        location: exp.location,
        details: exp.details.map((d) => d.detail),
        technologies: [], // Note: Technologies are not directly linked to experience in the schema.
      })),
      education: cv.education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree,
        years: edu.years,
        location: edu.location,
      })),
      skills: cv.skills.map((skill) => skill.skillName),
      publications: cv.publications.map((pub) => ({
        title: pub.title,
        description: pub.description,
      })),
      projects: cv.projects.map((proj) => ({
        name: proj.name,
        description: proj.description,
        technologies: proj.technologies.map((tech) => tech.technologyName),
      })),
      languages: cv.languages.map((lang) => lang.languageName),
      interests: cv.interests.map((interest) => interest.interestName),
    };

    return response;
  }
}
