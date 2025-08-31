import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { PersonalInfo } from './personal_info.entity';

@Entity('interests')
export class Interest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'interest_name' })
  interestName: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.interests, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;
}
