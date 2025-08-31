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
@Entity('education')
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution: string;

  @Column({ nullable: true })
  degree: string;

  @Column({ nullable: true })
  years: string;

  @Column({ nullable: true })
  location: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.education, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;
}
