import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lang } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<Lang>('es');

  get currentLang$(): Observable<Lang> {
    return this.currentLang.asObservable();
  }

  get currentLangValue(): Lang {
    return this.currentLang.getValue();
  }

  toggleLanguage(): void {
    const next: Lang = this.currentLangValue === 'es' ? 'ca' : 'es';
    this.currentLang.next(next);
  }

  setLanguage(lang: Lang): void {
    this.currentLang.next(lang);
  }
}
