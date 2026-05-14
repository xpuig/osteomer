import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
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
              Inicio
            </a>
            <a
              routerLink="/"
              [fragment]="'servicios'"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              Servicios
            </a>
            <a
              routerLink="/equipo"
              routerLinkActive="text-black"
              (click)="mobileOpen = false"
              class="text-sm font-semibold text-black/50 transition-colors hover:text-black"
            >
              Equipo
            </a>
          </div>
        </div>

        <a
          href="#"
          class="hidden rounded border border-black px-5 py-2 text-sm font-bold text-black transition-all duration-300 hover:bg-black hover:text-white md:inline-block"
        >
          Cita Online
        </a>
      </nav>
    </header>
    <div class="h-[57px]"></div>
  `,
  styles: ``
})
export class HeaderComponent {
  mobileOpen = false;
}
