import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Project } from './projects.entity';
@Entity('project_technologies')
export class ProjectTechnology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'technology_name' })
  technologyName: string;

  @ManyToOne(() => Project, (project) => project.technologies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;
}
