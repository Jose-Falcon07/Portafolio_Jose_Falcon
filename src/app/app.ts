import { Component } from '@angular/core';

import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/home/hero/hero';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Experience,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}