import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PersonalInfo } from './personal_info.entity';
import { ExperienceDetail } from './experience_details.entity';

@Entity('experience')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  years: string;
  @Column({ nullable: true })
  startDate: string;
  @Column({ nullable: true })
  endDate: string;

  @Column({ nullable: true })
  location: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.experience, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;

  @OneToMany(() => ExperienceDetail, (detail) => detail.experience)
  details: ExperienceDetail[];
}
