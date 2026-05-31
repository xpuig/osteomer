import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  PageKey,
  buildLocalizedPath,
  parseLocalizedUrl
} from '../i18n/localized-routes';
import { Lang } from '../i18n/translations';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizedRouteService {
  private readonly router = inject(Router);
  private readonly langService = inject(LanguageService);

  currentPage: PageKey = 'home';

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.syncFromUrl());

    this.syncFromUrl();
  }

  path(page: PageKey, lang?: Lang): string {
    return buildLocalizedPath(lang ?? this.langService.currentLangValue, page);
  }

  isActive(page: PageKey): boolean {
    return this.currentPage === page;
  }

  toggleLanguage(): void {
    const nextLang: Lang = this.langService.currentLangValue === 'ca' ? 'es' : 'ca';
    this.router.navigateByUrl(this.path(this.currentPage, nextLang));
  }

  private syncFromUrl(): void {
    const parsed = parseLocalizedUrl(this.router.url);
    if (!parsed) {
      return;
    }

    this.currentPage = parsed.page;
    if (this.langService.currentLangValue !== parsed.lang) {
      this.langService.setLanguage(parsed.lang);
    }

    document.documentElement.lang = parsed.lang;
  }
}
