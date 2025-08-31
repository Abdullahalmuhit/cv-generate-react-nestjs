// seed.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

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
  providers: [SeedService],
  controllers: [SeedController],
})
export class SeedModule {}