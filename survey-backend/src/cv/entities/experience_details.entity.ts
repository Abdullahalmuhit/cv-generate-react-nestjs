import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Experience } from './experience.entity';
import { PersonalInfo } from './personal_info.entity';

@Entity('experience_details')
export class ExperienceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  detail: string;

  @ManyToOne(() => Experience, (experience) => experience.details, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'experience_id' })
  experience: Experience;
}


