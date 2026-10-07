import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly currentLanguageSignal = signal<'es' | 'en'>(
    this.detectLanguage()
  );

  readonly currentLanguage = this.currentLanguageSignal.asReadonly();

  readonly oppositeLanguage = computed(() =>
    this.currentLanguageSignal() === 'es' ? 'en' : 'es'
  );

  private detectLanguage(): 'es' | 'en' {
    if (typeof document === 'undefined') {
      return 'es';
    }

    const language = document.documentElement.lang.toLowerCase();

    return language.startsWith('en') ? 'en' : 'es';
  }

  switchLanguage(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const target =
      this.currentLanguageSignal() === 'es'
        ? 'en'
        : 'es';

    const currentPath = window.location.pathname;

    let pathWithoutLocale = currentPath.replace(
      /^\/(es|en)(?=\/|$)/,
      ''
    );

    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = `/${pathWithoutLocale}`;
    }

    window.location.href =
      `/${target}${pathWithoutLocale}${window.location.hash}`;
  }
}
