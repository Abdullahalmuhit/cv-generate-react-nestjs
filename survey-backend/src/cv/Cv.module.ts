import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvService } from './CvService.service';
import { CvController } from './CvController.controller';
import { PersonalInfo } from './entities/personal_info.entity';
import { ExperienceDetail } from './entities/experience_details.entity';
import { Skill } from './entities/skills.entity';
import { Education } from './entities/education.entity';
import { Project } from './entities/projects.entity';
import { ProjectTechnology } from './entities/project_technologies.entity';
import { Publication } from './entities/publications.entity';
import { Language } from './entities/languages.entity';
import { Interest } from './entities/interests.entity';
import { Experience } from './entities/experience.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PersonalInfo,
      Experience,
      ExperienceDetail,
      Skill,
      Education,
      Project,
      ProjectTechnology,
      Publication,
      Language,
      Interest,
    ]),
  ],
  controllers: [CvController],
  providers: [CvService],
})
export class CvModule {}
