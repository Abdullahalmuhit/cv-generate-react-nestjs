import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Experience } from './experience.entity';
import { Education } from './education.entity';
import { Skill } from './skills.entity';
import { Project } from './projects.entity';
import { Publication } from './publications.entity';
import { Language } from './languages.entity';
import { Interest } from './interests.entity';

@Entity('personal_info')
export class PersonalInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'job_title' })
  jobTitle: string;

  @Column({ name: 'profile_image_url', nullable: true })
  profileImageUrl: string;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  location: string;

  @Column({ name: 'linkedin_url', nullable: true })
  linkedinUrl: string;

  @Column({ name: 'github_url', nullable: true })
  githubUrl: string;

  @OneToMany(() => Experience, (experience) => experience.cv)
  experience: Experience[];

  @OneToMany(() => Education, (education) => education.cv)
  education: Education[];

  @OneToMany(() => Skill, (skill) => skill.cv)
  skills: Skill[];

  @OneToMany(() => Project, (project) => project.cv)
  projects: Project[];

  @OneToMany(() => Publication, (publication) => publication.cv)
  publications: Publication[];

  @OneToMany(() => Language, (language) => language.cv)
  languages: Language[];

  @OneToMany(() => Interest, (interest) => interest.cv)
  interests: Interest[];
}

