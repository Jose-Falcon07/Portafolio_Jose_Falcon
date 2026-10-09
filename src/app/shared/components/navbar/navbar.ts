import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private readonly languageService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  menuOpen = signal(false);

  currentLanguage = this.languageService.currentLanguage;
  oppositeLanguage = this.languageService.oppositeLanguage;

  theme = this.themeService.theme;

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  switchLanguage(): void {
    this.languageService.switchLanguage();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}