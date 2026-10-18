import {
  Component
} from '@angular/core';


interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
  details: string;
  certificateUrl: string;
  badge: string;
}


@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class Certifications {

  certifications: Certification[] = [

    {
      id: 'oracle-database',

      title:
        'Database Foundations',

      institution:
        'Oracle Academy · ITSE',

      year:
        '2026',

      details:
        '90 horas',

      certificateUrl:
        'certifications/oracle-database-foundations.pdf',

      badge:
        'ORACLE'
    },


    {
      id: 'sql-server',

      title:
        'SQL Maestro: Master en SQL Server',

      institution:
        'Udemy',

      year:
        '2026',

      details:
        '15 horas',

      certificateUrl:
        'certifications/sql-server-master.pdf',

      badge:
        'SQL'
    },


    {
      id: 'cybersecurity',

      title:
        'Introduction to Cybersecurity',

      institution:
        'Cisco Networking Academy',

      year:
        '2025',

      details:
        'Cisco Networking Academy',

      certificateUrl:
        'certifications/introduction-to-cybersecurity.pdf',

      badge:
        'CISCO'
    },


    {
      id: 'linux-unhatched',

      title:
        'Linux Unhatched',

      institution:
        'Cisco Networking Academy · ITSE',

      year:
        '2025',

      details:
        'Linux Fundamentals',

      certificateUrl:
        'certifications/linux-unhatched.pdf',

      badge:
        'LINUX'
    }

  ];

}