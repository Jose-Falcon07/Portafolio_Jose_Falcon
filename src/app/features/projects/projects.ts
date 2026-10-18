import {
  Component,
  computed,
  signal
} from '@angular/core';

import type {
  Project
} from '../../core/models/project.model';


@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = signal<Project[]>([

    // ======================================================
    // CARTA BLANCA
    // Proyecto destacado
    // ======================================================

    {
      id: 'carta-blanca',

      title: 'Carta Blanca',

      description: $localize`
        Sistema de gestión de archivo físico desarrollado para organizar
        racks, módulos, alturas, ubicaciones, cajas y carpetas, incorporando
        autenticación, control de usuarios, roles y operaciones sobre la
        estructura del archivo.
      `,

      image:
        '/images/projects/carta-blanca.png',

      technologies: [
        'Ionic',
        'Angular',
        'TypeScript',
        'Supabase',
        'PostgreSQL'
      ],

      githubUrl:
        'https://github.com/Jose-Falcon07/carta-blanca',

      demoUrl: '',

      featured: true,

      order: 1
    },


    // ======================================================
    // SKYWORD
    // Concepto de proyecto
    // ======================================================

    {
      id: 'skyword',

      title: 'SkyWord',

      description: $localize`
        Concepto de un juego educativo de vocabulario en inglés donde
        el jugador controla un avión y debe seleccionar la palabra
        correcta mientras avanza por distintos desafíos.
      `,

      image:
        '/images/projects/skyword.png',

      technologies: [
        'Python',
        'Pygame',
        'Figma'
      ],

      githubUrl: '',

      demoUrl: '',

      featured: false,

      order: 2
    },

    {
      id: 'project-3',

      title:
        $localize`Proyecto en desarrollo`,

      description:
        $localize`
          Nuevas aplicaciones y experimentos serán añadidos próximamente.
        `,

      image: '',

      technologies: [
        'Java',
        'Angular'
      ],

      githubUrl: '',

      demoUrl: '',

      featured: false,

      order: 3
    }

  ]);

  featuredProject =
    computed(() =>
      this.projects().find(
        project =>
          project.featured
      )
    );

  otherProjects =
    computed(() =>
      this.projects()
        .filter(
          project =>
            !project.featured
        )
        .sort(
          (a, b) =>
            a.order - b.order
        )
    );

  getTechnologyIcon(
    technology: string
  ): string {

    const icons:
      Record<string, string> = {

      // Ionic
      Ionic:
        'devicon-ionic-original colored',

      // Angular
      Angular:
        'devicon-angularjs-plain colored',

      // TypeScript
      TypeScript:
        'devicon-typescript-plain colored',

      // Supabase
      Supabase:
        'devicon-supabase-plain colored',

      // PostgreSQL
      PostgreSQL:
        'devicon-postgresql-plain colored',

      // Python
      Python:
        'devicon-python-plain colored',

      // Pygame
      Pygame:
        'devicon-python-plain colored',

      // Figma
      Figma:
        'devicon-figma-plain colored',

      // Java
      Java:
        'devicon-java-plain colored',

      // Firebase
      Firebase:
        'devicon-firebase-plain colored'

    };

    return (
      icons[technology] ??
      ''
    );

  }

}