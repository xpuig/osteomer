import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  template: `
    <footer class="border-t border-black/10 bg-white">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div class="grid gap-12 md:grid-cols-3">
          <div>
            <span class="text-lg font-bold tracking-[-0.02em]">OSTEOMER</span>
            <p class="mt-3 text-base leading-relaxed text-black/65">
              {{ 'FOOTER.DESCRIPTION' | translate }}
            </p>
          </div>
          <div>
            <h4 class="mb-4 text-base font-bold uppercase tracking-widest text-black/70">{{ 'FOOTER.SERVICES_TITLE' | translate }}</h4>
            <ul class="space-y-2 text-base text-black/65">
              <li><a routerLink="/osteopatia" class="transition-colors hover:text-black">{{ 'NAV.OSTEOPATHY' | translate }}</a></li>
              <li><a routerLink="/especialidades" class="transition-colors hover:text-black">{{ 'NAV.SPECIALTIES' | translate }}</a></li>
              <li><a routerLink="/contacto" class="transition-colors hover:text-black">{{ 'NAV.CONTACT' | translate }}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-base font-bold uppercase tracking-widest text-black/70">{{ 'FOOTER.CONTACT_TITLE' | translate }}</h4>
            <ul class="space-y-2 text-base text-black/65">
              <li>{{ 'FOOTER.ADDRESS' | translate }}</li>
              <li>{{ 'FOOTER.PHONE' | translate }}</li>
              <li>hola&#64;osteomer.com</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-black/10 pt-8 text-center text-sm text-black/55">
          &copy; 2026 OSTEOMER. {{ 'FOOTER.RIGHTS' | translate }}
        </div>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {}
