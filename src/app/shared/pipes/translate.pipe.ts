import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { translations } from '../i18n/translations';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  constructor(private langService: LanguageService) {}

  transform(key: string): string {
    const keys = key.split('.');
    let value: any = translations[this.langService.currentLangValue];
    for (const k of keys) {
      if (value == null) return key;
      value = value[k];
    }
    return typeof value === 'string' ? value : key;
  }
}
