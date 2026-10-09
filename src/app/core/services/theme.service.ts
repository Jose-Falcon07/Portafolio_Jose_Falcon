import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeSignal = signal<Theme>(
    this.getInitialTheme()
  );

  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    this.applyTheme(this.themeSignal());
  }

  toggleTheme(): void {
    const newTheme: Theme =
      this.themeSignal() === 'dark'
        ? 'light'
        : 'dark';

    this.themeSignal.set(newTheme);
    this.applyTheme(newTheme);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-theme', newTheme);
    }
  }

  private getInitialTheme(): Theme {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme =
      localStorage.getItem('portfolio-theme');

    if (
      savedTheme === 'dark' ||
      savedTheme === 'light'
    ) {
      return savedTheme;
    }

    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
  }
}