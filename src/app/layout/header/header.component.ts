import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, TranslatePipe],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a routerLink="/" class="text-xl font-bold tracking-[-0.02em] text-black">
          OSTEOMER
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
          class="fixed inset-x-0 top-[57px] bg-white border-b border-black/10 md:border-0 md:static md:inset-auto md:bg-transparent md:flex md:items-center md:gap-8 transition-all duration-300 overflow-hidden"
          [ngClass]="mobileOpen ? 'max-h-80 p-6 md:p-0' : 'max-h-0 p-0 md:!max-h-full'"
        >
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:gap-1">
            <a
              routerLink="/"
              [ngClass]="{'text-black font-bold': isActive('/'), 'text-black/65 font-bold': !isActive('/')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base transition-all duration-300 hover:text-black"
            >
              {{ 'NAV.HOME' | translate }}
            </a>
            <a
              routerLink="/osteopatia"
              [ngClass]="{'text-black font-bold': isActive('/osteopatia'), 'text-black/65 font-bold': !isActive('/osteopatia')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base transition-all duration-300 hover:text-black"
            >
              {{ 'NAV.OSTEOPATHY' | translate }}
            </a>
            <a
              routerLink="/especialidades"
              [ngClass]="{'text-black font-bold': isActive('/especialidades'), 'text-black/65 font-bold': !isActive('/especialidades')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base transition-all duration-300 hover:text-black"
            >
              {{ 'NAV.SPECIALTIES' | translate }}
            </a>
            <a
              routerLink="/sobre-mi"
              [ngClass]="{'text-black font-bold': isActive('/sobre-mi'), 'text-black/65 font-bold': !isActive('/sobre-mi')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base transition-all duration-300 hover:text-black"
            >
              {{ 'NAV.ABOUT' | translate }}
            </a>
            <a
              routerLink="/contacto"
              [ngClass]="{'text-black font-bold': isActive('/contacto'), 'text-black/65 font-bold': !isActive('/contacto')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base transition-all duration-300 hover:text-black"
            >
              {{ 'NAV.CONTACT' | translate }}
            </a>
            <a
              routerLink="/cita-online"
              [ngClass]="{'text-black font-bold': isActive('/cita-online'), 'text-black/65 font-bold': !isActive('/cita-online')}"
              (click)="mobileOpen = false"
              class="px-3 py-1 text-base font-bold text-black transition-all duration-300 hover:text-black md:hidden"
            >
              {{ 'NAV.BOOK_ONLINE' | translate }}
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            (click)="langService.toggleLanguage()"
            class="flex items-center gap-1 text-sm font-semibold tracking-widest transition-colors hover:text-black"
          >
            <span [class]="langService.currentLangValue === 'ca' ? 'text-black font-bold' : 'text-black/35'">CA</span>
            <span class="text-black/25">|</span>
            <span [class]="langService.currentLangValue === 'es' ? 'text-black font-bold' : 'text-black/35'">ES</span>
          </button>
          <a
            routerLink="/cita-online"
            class="hidden rounded bg-black px-5 py-2.5 text-base font-bold text-white transition-all duration-300 hover:bg-black/80 md:inline-block"
          >
            {{ 'NAV.BOOK_ONLINE' | translate }}
          </a>
        </div>
      </nav>
    </header>
    <div class="h-[57px]"></div>
  `,
  styles: ``
})
export class HeaderComponent {
  mobileOpen = false;

  constructor(
    public langService: LanguageService,
    private router: Router
  ) {}

  isActive(path: string): boolean {
    return this.router.isActive(path, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }
}
