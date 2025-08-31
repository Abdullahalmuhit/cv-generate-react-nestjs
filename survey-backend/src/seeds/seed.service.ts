// seed.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Import all your entities
import { PersonalInfo } from '../cv/entities/personal_info.entity';
import { Experience } from '../cv/entities/experience.entity';
import { ExperienceDetail } from '../cv/entities/experience_details.entity';
import { Skill } from '../cv/entities/skills.entity';
import { Education } from '../cv/entities/education.entity';
import { Project } from '../cv/entities/projects.entity';
import { ProjectTechnology } from '../cv/entities/project_technologies.entity';
import { Publication } from '../cv/entities/publications.entity';
import { Language } from '../cv/entities/languages.entity';
import { Interest } from '../cv/entities/interests.entity';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(PersonalInfo)
    private personalInfoRepo: Repository<PersonalInfo>,
    @InjectRepository(Experience)
    private experienceRepo: Repository<Experience>,
    @InjectRepository(ExperienceDetail)
    private experienceDetailRepo: Repository<ExperienceDetail>,
    @InjectRepository(Skill)
    private skillRepo: Repository<Skill>,
    @InjectRepository(Education)
    private educationRepo: Repository<Education>,
    @InjectRepository(Project)
    private projectRepo: Repository<Project>,
    @InjectRepository(ProjectTechnology)
    private projectTechnologyRepo: Repository<ProjectTechnology>,
    @InjectRepository(Publication)
    private publicationRepo: Repository<Publication>,
    @InjectRepository(Language)
    private languageRepo: Repository<Language>,
    @InjectRepository(Interest)
    private interestRepo: Repository<Interest>,
  ) {}

  async seed() {
    this.logger.log('Starting database seeding...');

    // Check if data already exists
    const existingCV = await this.personalInfoRepo.findOne({
      where: { email: 'abdullahalmuhit1296@gmail.com' },
    });

    if (existingCV) {
      this.logger.log('CV data already exists. Removing old data...');
      await this.clearDatabase();
    }

    // Create personal info
    const personalInfo = await this.personalInfoRepo.save({
      name: 'Abdullah Al Muhid',
      jobTitle: 'Software Engineer',
      profileImageUrl: null, // You can add a profile image URL if available
      summary:
        'A results-driven software engineer with over 6 years of experience in full-stack development, specializing in PHP, Laravel, NestJS, React.js, and MySQL. Skilled in leveraging AWS (EC2, S3) for scalable solutions and adept at integrating modern frameworks like Laravel, NestJS to deliver robust backend systems.',
      email: 'abdullahalmuhit1296@gmail.com',
      phone: '+8801727308645',
      location: 'House#16, Section-12, Mirpur, Dhaka, Bangladesh',
      linkedinUrl: 'https://www.linkedin.com/in/abdullah-al-muhid/',
      githubUrl: 'https://github.com/Abdullahalmuhit',
    });

    // Add education
    await this.educationRepo.save({
      institution: 'Daffodil International University',
      degree: 'B.Sc in software engineering',
      years: '05/2015 – 05/2019',
      location: 'Dhaka, Bangladesh',
      cv: personalInfo,
    });

    // Add skills
    const skills = [
      'PHP',
      'Laravel',
      'Node.js',
      'NestJS',
      'JavaScript',
      'ES6',
      'Ajax',
      'REST API',
      'Vue JS',
      'React JS',
      'MySQL',
      'GIT',
      'Docker',
      'AWS (EC2 and S3)',
    ];

    for (const skillName of skills) {
      await this.skillRepo.save({
        skillName,
        cv: personalInfo,
      });
    }

    // Add experience
    const healthScreenExp = await this.experienceRepo.save({
      company: 'HealthScreen Bangladesh',
      title: 'Software Engineer',
      years: null, // You can add specific years if available
      location: null,
      cv: personalInfo,
    });

    // Add experience details for HealthScreen
    const healthScreenDetails = [
      'Worked on the multiple software projects simultaneously and participated in the whole software development process from design to implementation and delivery.',
      'Developed new software functionalities, ensuring that clients vision and requirements were met.',
      'Recognized by executives for completing projects in a timely manner within budget.',
      'Library Management System - working on a Library Management System, where I contributed to its development, implementing features such as catalog management, borrowing and returning books, and user authentication and fine.',
      "Teachers Training And Hostel Management (Gov Project for NAEM) - Teacher's Training with Hostel Management System, enabling efficient management of training programs and hostel facilities For educators.",
      'Book Distribution Management System (Gov Project For NCTB) - This System improved the book distribution process for the NCTB. It streamlined the demand collection, tendering, printing, and distribution phases, ensuring that educational books reached the institutes in a timely manner.',
      'Education Management System (MyClassRoom) - online classrooms, assignment management, and student-teacher communication, routine management, attendance, result processing, transcript generate.',
      'Payment Technology: PHP, Laravel, MySQL, Nodejs, NestJS, React JS, JavaScript, Docker, AWS service (EC2, S3)',
    ];

    for (const detail of healthScreenDetails) {
      await this.experienceDetailRepo.save({
        detail,
        experience: healthScreenExp,
      });
    }

    const skylarkExp = await this.experienceRepo.save({
      company: 'Skylark Soft Limited',
      title: 'Software Engineer',
      years: null,
      location: null,
      cv: personalInfo,
    });

    const skylarkDetails = [
      'Developed package based Garments ERP. This solution aimed to streamline and optimize various aspects of the garment industry, including inventory management, production tracking, and order processing. I also played a key role in the development of a Garments Lab Testing and Management software. (PHP, Laravel, Vue JS, Docker)',
      'Inventory Management System (PHP, Laravel, Mysql)',
    ];

    for (const detail of skylarkDetails) {
      await this.experienceDetailRepo.save({
        detail,
        experience: skylarkExp,
      });
    }

    const iqsaExp = await this.experienceRepo.save({
      company: 'IQSA Soft',
      title: 'Junior Software Engineer',
      years: null,
      location: null,
      cv: personalInfo,
    });

    const iqsaDetails = [
      'Partnered with a developer to improve existing project using technology PHP, Laravel, CodeIgniter.',
      'Contributing on Internet Service Provider (ISP) - PHP, Laravel, Javascript',
      'Worked on Inventory Management System - PHP, Laravel, Javascript',
      'Technology: PHP, Laravel, MySQL, JavaScript, CodeIgnator',
    ];

    for (const detail of iqsaDetails) {
      await this.experienceDetailRepo.save({
        detail,
        experience: iqsaExp,
      });
    }

    // Add languages
    const languages = ['Bangla', 'English', 'Hindi'];
    for (const languageName of languages) {
      await this.languageRepo.save({
        languageName,
        cv: personalInfo,
      });
    }

    // Add interests
    const interests = [
      'Learning new technologies and frameworks',
      'Playing outdoor games for team-building and relaxation',
      'Exploring AI-driven solutions and automation',
      'Building innovative web and mobile applications',
      'Traveling to experience diverse cultures',
    ];

    for (const interestName of interests) {
      await this.interestRepo.save({
        interestName,
        cv: personalInfo,
      });
    }

    // Add publications
    await this.publicationRepo.save({
      title:
        'Load Balancing of Distributed Controller in Software define Networking',
      description:
        'Utilized a mininet virtual network environment to balance data traffic efficiently across SDN controllers, improving network reliability and scalability.',
      cv: personalInfo,
    });

    // Add projects
    const projects = [
      {
        name: 'Book Distribution Management System (Government Project For NCTB)',
        description:
          'This System improved the book distribution process for the NCTB. It streamlined the demand collection from institute or Upazila/Thana Education Office. Tendering from NCTB, Printing from press, and distribution phases, ensuring that educational books reached the institutes in a timely manner.',
        technologies: [
          'PHP',
          'Laravel',
          'MySQL',
          'JavaScript',
          'Ajax',
          'REST API',
          'Docker',
        ],
      },
      {
        name: 'Teachers Training And Hostel Management (Government Project for NAEM)',
        description:
          'Participants enroll in a training-related course. The trainer conducts exams, records attendance, handles marking, and generates certificates for participants. Hostel facilities and room charges are also provided.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Ajax'],
      },
      {
        name: 'University Automation System (ORPS)',
        description:
          'Developed a comprehensive Online Result Processing System (ORPS) for managing course registration, grading, result processing, and inventory related to exams.',
        technologies: ['NestJS', 'React.js', 'MySQL', 'S3 Bucket'],
      },
      {
        name: 'Education Management System (MyClassRoom)',
        description:
          'Online classrooms, assignment management, student-teacher communication, routine management, attendance, fee management, payment system, result processing, transcript generate.',
        technologies: [
          'PHP',
          'Laravel',
          'MySQL',
          'JavaScript',
          'Ajax',
          'jitsi-meet',
          'REST API',
          'Docker',
        ],
      },
      {
        name: 'Library Management System',
        description:
          "Administrator Login, Students/Borrowers' Registration, Bookshelf Information Recording, Manage category, Manage author, Book Information Recording, Search Book, Book Monitoring and Updates, View and Check Information, Borrowing Rules, Borrowing Information, Borrowing Records, Institute Settings, Late Fee",
        technologies: ['PHP', 'Laravel', 'MySQL', 'ReactJS'],
      },
      {
        name: 'Garments ERP, Package Based Garments ERP',
        description:
          'Developed package based Garments ERP. gpRMG ERP is the ultimate garments ERP software solution for the garments industry. It aims at keeping track of all the activities, including receiving an order from a buyer, costing, planning, procurement, production, inventory, import-export, etc. I also played a key role in the development of a Garments Lab Testing and Management software.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'ReactJS', 'Docker'],
      },
      {
        name: 'Tution BD',
        description:
          'This is an innovative solution for the Students, Tutors. Tutors who like to expose their Requirements and specifying their platforms for learning or teaching. This System automates various operations such as Student Management, Credits System, Time Table Management,Searching Tutors, Send Request and Records & Profiles Management, Profile search, messages, internal mail, etc.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Ajax'],
      },
      {
        name: 'Internet Service Provider (ISP)',
        description:
          'Connectivity services, allowing users to connect to the internet, browse websites, send emails, users tracking, bill pay and other online activities.',
        technologies: ['PHP', 'Laravel', 'MySQL'],
      },
    ];

    for (const projectData of projects) {
      const project = await this.projectRepo.save({
        name: projectData.name,
        description: projectData.description,
        cv: personalInfo,
      });

      for (const techName of projectData.technologies) {
        await this.projectTechnologyRepo.save({
          technologyName: techName,
          project: project,
        });
      }
    }

    this.logger.log('Database seeding completed successfully!');
    return { message: 'Database seeded successfully' };
  }

  async clearDatabase() {
    // Delete all records in reverse order to respect foreign key constraints
    await this.projectTechnologyRepo.delete({});
    await this.projectRepo.delete({});
    await this.publicationRepo.delete({});
    await this.experienceDetailRepo.delete({});
    await this.experienceRepo.delete({});
    await this.educationRepo.delete({});
    await this.skillRepo.delete({});
    await this.languageRepo.delete({});
    await this.interestRepo.delete({});
    await this.personalInfoRepo.delete({});
  }
}
