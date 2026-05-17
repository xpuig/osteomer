import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, TranslatePipe],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a routerLink="/" class="text-xl font-extrabold tracking-[-0.02em] text-black">
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
          class="fixed inset-x-0 top-[57px] bg-white border-b border-black/5 md:border-0 md:static md:inset-auto md:bg-transparent md:flex md:items-center md:gap-8 transition-all duration-300 overflow-hidden"
          [ngClass]="mobileOpen ? 'max-h-80 p-6 md:p-0' : 'max-h-0 p-0 md:!max-h-full'"
        >
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <a
              routerLink="/"
              routerLinkActive="text-black"
              [routerLinkActiveOptions]="{exact: true}"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              {{ 'NAV.HOME' | translate }}
            </a>
            <a
              routerLink="/osteopatia"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              {{ 'NAV.OSTEOPATHY' | translate }}
            </a>
            <a
              routerLink="/especialidades"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              {{ 'NAV.SPECIALTIES' | translate }}
            </a>
            <a
              routerLink="/sobre-mi"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              {{ 'NAV.ABOUT' | translate }}
            </a>
            <a
              routerLink="/contacto"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              {{ 'NAV.CONTACT' | translate }}
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            (click)="langService.toggleLanguage()"
            class="text-xs font-semibold tracking-widest text-black/30 transition-colors hover:text-black"
          >
            ES | CA
          </button>
          <a
            href="#"
            class="hidden rounded bg-black px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-black/80 md:inline-block"
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

  constructor(public langService: LanguageService) {}
}
