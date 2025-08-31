export class CvResponseDTO {
  name: string;
  jobTitle: string;
  profileImage: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  experience: {
    company: string;
    title: string;
    years: string;
    startDate: string;
    endDate: string;
    location: string;
    details: string[];
    technologies: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    years: string;
    location: string;
  }[];
  skills: string[];
  publications: {
    title: string;
    description: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  languages: string[];
  interests: string[];
}
