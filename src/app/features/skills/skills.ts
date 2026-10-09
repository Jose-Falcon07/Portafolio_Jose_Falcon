import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'Angular',
          icon: 'devicon-angularjs-plain colored'
        },
        {
          name: 'TypeScript',
          icon: 'devicon-typescript-plain colored'
        },
        {
          name: 'HTML5',
          icon: 'devicon-html5-plain colored'
        },
        {
          name: 'SCSS',
          icon: 'devicon-sass-original colored'
        }
      ]
    },

    {
      title: 'Backend',
      skills: [
        {
          name: 'Java',
          icon: 'devicon-java-plain colored'
        },
        {
          name: 'Spring Boot',
          icon: 'devicon-spring-original colored'
        },
        {
          name: 'Python',
          icon: 'devicon-python-plain colored'
        },
        {
          name: 'C#',
          icon: 'devicon-csharp-plain colored'
        },
        {
          name: 'C++',
          icon: 'devicon-cplusplus-plain colored'
        }
      ]
    },

    {
      title: 'Bases de datos',
      skills: [
        {
          name: 'PostgreSQL',
          icon: 'devicon-postgresql-plain colored'
        },
        {
          name: 'MySQL',
          icon: 'devicon-mysql-original colored'
        },
        {
          name: 'OracleDB',
          icon: 'devicon-oracle-original colored'
        },
        {
          name: 'MongoDB',
          icon: 'devicon-mongodb-plain colored'
        }
      ]
    },

    {
      title: 'Cloud',
      skills: [
        {
          name: 'AWS',
          icon: 'devicon-amazonwebservices-plain-wordmark colored'
        },
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        },
        {
          name: 'Oracle Cloud',
          icon: 'devicon-oracle-original colored'
        }
      ]
    },

    {
      title: 'Herramientas',
      skills: [
        {
          name: 'Git',
          icon: 'devicon-git-plain colored'
        },
        {
          name: 'GitHub',
          icon: 'devicon-github-original'
        },
        {
          name: 'GitLab',
          icon: 'devicon-gitlab-plain colored'
        },
        {
          name: 'Linux',
          icon: 'devicon-linux-plain colored'
        },
        {
          name: 'VS Code',
          icon: 'devicon-vscode-plain colored'
        }
      ]
    }
  ];
}