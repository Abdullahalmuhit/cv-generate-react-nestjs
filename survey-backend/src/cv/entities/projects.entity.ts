import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { PersonalInfo } from './personal_info.entity';
import { ProjectTechnology } from './project_technologies.entity';
@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.projects, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;

  @OneToMany(() => ProjectTechnology, (tech) => tech.project)
  technologies: ProjectTechnology[];
}
