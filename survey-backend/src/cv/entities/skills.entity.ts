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
@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'skill_name' })
  skillName: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.skills, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;
}
