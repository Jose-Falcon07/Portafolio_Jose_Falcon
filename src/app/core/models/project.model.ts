export interface Project {
  id?: string;

  title: string;
  description: string;
  image: string;

  technologies: string[];

  githubUrl?: string;
  demoUrl?: string;

  featured: boolean;
  order: number;
}