
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
@Entity('publications')
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => PersonalInfo, (personalInfo) => personalInfo.publications, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cv_id' })
  cv: PersonalInfo;
}