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
        Juego educativo de vocabulario en inglés donde el jugador controla
        un avión y debe seleccionar la palabra correcta mientras avanza
        por distintos desafíos.
      `,

      image: '/images/projects/skyword.png',

      technologies: [
        'Python',
        'Pygame',
        'Figma'
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
    this.projects().find(
      project => project.featured
    )
  );

  otherProjects = computed(() =>
    this.projects()
      .filter(
        project => !project.featured
      )
      .sort(
        (a, b) =>
          a.order - b.order
      )
  );

  getTechnologyIcon(
    technology: string
  ): string {

    const icons: Record<string, string> = {
      Python:
        'devicon-python-plain colored',

      Pygame:
        'devicon-python-plain colored',

      Figma:
        'devicon-figma-plain colored',

      Angular:
        'devicon-angularjs-plain colored',

      Java:
        'devicon-java-plain colored',

      Firebase:
        'devicon-firebase-plain colored'
    };

    return icons[technology] ?? '';
  }
}