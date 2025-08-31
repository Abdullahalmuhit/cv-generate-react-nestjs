import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { PersonalInfo } from './personal_info.entity';
@Entity('languages')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'language_name' })
  languageName: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.languages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;
}
