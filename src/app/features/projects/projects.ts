import { Component, computed, signal } from '@angular/core';
import type { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = signal<Project[]>([
    {
      id: 'skyword',
      title: 'SkyWord',
      description: $localize`
        Juego educativo donde el usuario controla un avión mientras aprende
        y practica vocabulario en inglés de una forma interactiva.
      `,
      image: '',
      technologies: [
        'Angular',
        'TypeScript',
        'Firebase',
        'SCSS'
      ],
      githubUrl: '#',
      demoUrl: '#',
      featured: true,
      order: 1
    },
    {
      id: 'project-2',
      title: $localize`Proyecto en desarrollo`,
      description: $localize`
        Espacio reservado para uno de mis próximos proyectos.
      `,
      image: '',
      technologies: [
        'Angular',
        'Java'
      ],
      featured: false,
      order: 2
    },
    {
      id: 'project-3',
      title: $localize`Proyecto en desarrollo`,
      description: $localize`
        Nuevas aplicaciones y experimentos serán añadidos próximamente.
      `,
      image: '',
      technologies: [
        'Python',
        'Firebase'
      ],
      featured: false,
      order: 3
    }
  ]);

  featuredProject = computed(() =>
    this.projects().find(project => project.featured)
  );

  otherProjects = computed(() =>
    this.projects()
      .filter(project => !project.featured)
      .sort((a, b) => a.order - b.order)
  );
}