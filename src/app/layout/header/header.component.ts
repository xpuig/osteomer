import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LocalizeRoutePipe } from '../../shared/pipes/localize-route.pipe';
import { LanguageService } from '../../shared/services/language.service';
import { LocalizedRouteService } from '../../shared/services/localized-route.service';
import { PageKey } from '../../shared/i18n/localized-routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, TranslatePipe, LocalizeRoutePipe],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <nav class="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 py-5 md:min-h-[104px] md:py-6 lg:px-8">
        <a [routerLink]="'home' | localizeRoute" class="flex items-center">
          <img src="assets/img/logo.svg" alt="OSTEOMER" class="h-10 md:h-14" />
        </a>

        <button
          (click)="mobileOpen = !mobileOpen"
          class="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menú"
        >
          <span class="block h-px w-5 bg-black transition-all duration-300" [ngClass]="mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''"></span>
          <span class="block h-px w-5 bg-black transition-all duration-300" [ngClass]="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="block h-px w-5 bg-black transition-all duration-300" [ngClass]="mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''"></span>
        </button>

        <div
          class="fixed inset-x-0 top-20 bg-white border-b border-black/10 md:border-0 md:static md:inset-auto md:bg-transparent md:flex md:items-center md:gap-8 transition-all duration-300 overflow-hidden"
          [ngClass]="mobileOpen ? 'max-h-80 p-6 md:p-0' : 'max-h-0 p-0 md:!max-h-full'"
        >
          <div class="flex flex-col gap-5 md:flex-row md:items-center md:gap-2">
            <a
              [routerLink]="'home' | localizeRoute"
              [ngClass]="{'text-black': isActive('home'), 'text-black/65': !isActive('home')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black"
            >
              {{ 'NAV.HOME' | translate }}
            </a>
            <a
              [routerLink]="'osteopatia' | localizeRoute"
              [ngClass]="{'text-black': isActive('osteopatia'), 'text-black/65': !isActive('osteopatia')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black"
            >
              {{ 'NAV.OSTEOPATHY' | translate }}
            </a>
            <a
              [routerLink]="'especialidades' | localizeRoute"
              [ngClass]="{'text-black': isActive('especialidades'), 'text-black/65': !isActive('especialidades')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black"
            >
              {{ 'NAV.SPECIALTIES' | translate }}
            </a>
            <a
              [routerLink]="'sobre-mi' | localizeRoute"
              [ngClass]="{'text-black': isActive('sobre-mi'), 'text-black/65': !isActive('sobre-mi')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black"
            >
              {{ 'NAV.ABOUT' | translate }}
            </a>
            <a
              [routerLink]="'contacto' | localizeRoute"
              [ngClass]="{'text-black': isActive('contacto'), 'text-black/65': !isActive('contacto')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black"
            >
              {{ 'NAV.CONTACT' | translate }}
            </a>
            <a
              [routerLink]="'cita-online' | localizeRoute"
              [ngClass]="{'text-black': isActive('cita-online'), 'text-black/65': !isActive('cita-online')}"
              (click)="mobileOpen = false"
              class="px-4 py-1.5 text-lg font-bold transition-colors duration-300 hover:text-black md:hidden"
            >
              {{ 'NAV.BOOK_ONLINE' | translate }}
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            (click)="routeService.toggleLanguage()"
            class="flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors hover:text-black"
          >
            <span [class]="langService.currentLangValue === 'ca' ? 'text-black font-bold' : 'text-black/35'">CA</span>
            <span class="text-black/25">|</span>
            <span [class]="langService.currentLangValue === 'es' ? 'text-black font-bold' : 'text-black/35'">ES</span>
          </button>
          <a
            [routerLink]="'cita-online' | localizeRoute"
            class="hidden rounded bg-black px-5 py-2.5 text-base font-bold text-white transition-all duration-300 hover:bg-black/80 md:inline-block"
          >
            {{ 'NAV.BOOK_ONLINE' | translate }}
          </a>
        </div>
      </nav>
    </header>
    <div class="h-20 md:h-[104px]"></div>
  `,
  styles: ``
})
export class HeaderComponent {
  mobileOpen = false;

  constructor(
    public langService: LanguageService,
    public routeService: LocalizedRouteService
  ) {}

  isActive(page: PageKey): boolean {
    return this.routeService.isActive(page);
  }
}
