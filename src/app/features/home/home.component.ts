import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="relative overflow-hidden bg-white">
      <div class="absolute inset-0 bg-cover bg-center"
           [style.backgroundImage]="'url(' + backgrounds[currentIndex] + ')'">
      </div>
      <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
           [style.backgroundImage]="'url(' + backgrounds[showNext ? nextIndex : currentIndex] + ')'"
           [style.opacity]="showNext ? 1 : 0">
      </div>
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex min-h-[80vh] flex-col justify-center pt-32 pb-24">
          <span class="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            {{ 'HOME.BADGE' | translate }}
          </span>
          <h1 class="max-w-4xl text-4xl font-black tracking-[-0.02em] leading-[1.1] text-white md:text-6xl lg:text-7xl">
            {{ 'HOME.TITLE_1' | translate }}<br>
            <span class="text-white/50">{{ 'HOME.TITLE_2' | translate }}</span>
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {{ 'HOME.DESCRIPTION' | translate }}
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <a
              routerLink="/osteopatia"
              class="inline-block rounded bg-white px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-white/80"
            >
              {{ 'HOME.CTA_PRIMARY' | translate }}
            </a>
            <a
              href="#"
              class="inline-block rounded border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              {{ 'HOME.CTA_SECONDARY' | translate }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="mb-16 text-3xl font-extrabold tracking-[-0.02em] text-black md:text-4xl">
          {{ 'HOME.SPECIALTIES_TITLE' | translate }}
        </h2>
        <div class="grid gap-8 md:grid-cols-3">
          <article class="border border-black/10 p-8 transition-all duration-300 hover:border-black/30 rounded">
            <h3 class="text-xl font-extrabold tracking-[-0.02em] text-black">
              {{ 'HOME.SPECIALTIES_GENERAL_TITLE' | translate }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-black/50">
              {{ 'HOME.SPECIALTIES_GENERAL_DESC' | translate }}
            </p>
          </article>
          <article class="border border-black/10 p-8 transition-all duration-300 hover:border-black/30 rounded">
            <h3 class="text-xl font-extrabold tracking-[-0.02em] text-black">
              {{ 'HOME.SPECIALTIES_OBSTETRIC_TITLE' | translate }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-black/50">
              {{ 'HOME.SPECIALTIES_OBSTETRIC_DESC' | translate }}
            </p>
          </article>
          <article class="border border-black/10 p-8 transition-all duration-300 hover:border-black/30 rounded">
            <h3 class="text-xl font-extrabold tracking-[-0.02em] text-black">
              {{ 'HOME.SPECIALTIES_PEDIATRIC_TITLE' | translate }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-black/50">
              {{ 'HOME.SPECIALTIES_PEDIATRIC_DESC' | translate }}
            </p>
          </article>
        </div>
        <div class="mt-10 text-center">
          <a
            routerLink="/especialidades"
            class="inline-block rounded border border-black/20 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            {{ 'HOME.SPECIALTIES_CTA' | translate }}
          </a>
        </div>
      </div>
    </section>

    <section class="bg-osteomer-gray py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid items-center gap-16 md:grid-cols-2">
          <div class="flex aspect-[4/3] items-center justify-center rounded bg-black/5">
            <svg viewBox="0 0 24 24" class="h-16 w-16 text-black/20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10"/>
              <path d="M12 6a6 6 0 1 0 6 6"/>
              <path d="M12 10a2 2 0 1 0 2 2"/>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-extrabold tracking-[-0.02em] text-black md:text-4xl">
              {{ 'HOME.ABOUT_TITLE' | translate }}
            </h2>
            <p class="mt-6 text-base leading-relaxed text-black/50">
              {{ 'HOME.ABOUT_DESC' | translate }}
            </p>
            <div class="mt-8">
              <a
                routerLink="/osteopatia"
                class="inline-block rounded bg-black px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-black/80"
              >
                {{ 'HOME.ABOUT_CTA' | translate }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-16 md:grid-cols-2">
          <div>
            <h2 class="text-3xl font-extrabold tracking-[-0.02em] text-black md:text-4xl">
              {{ 'HOME.BIO_TITLE' | translate }}
            </h2>
            <p class="mt-6 text-base leading-relaxed text-black/50">
              {{ 'HOME.BIO_TEXT' | translate }}
            </p>
            <div class="mt-8">
              <a
                routerLink="/sobre-mi"
                class="inline-block rounded border border-black/20 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                {{ 'HOME.BIO_CTA' | translate }}
              </a>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-extrabold tracking-[-0.02em] text-black md:text-4xl">
              {{ 'FOOTER.CONTACT_TITLE' | translate }}
            </h2>
            <ul class="mt-6 space-y-4 text-base text-black/50">
              <li class="flex items-start gap-3">
                <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 flex-shrink-0 text-black/30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ 'FOOTER.ADDRESS' | translate }}
              </li>
              <li class="flex items-start gap-3">
                <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 flex-shrink-0 text-black/30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {{ 'FOOTER.PHONE' | translate }}
              </li>
              <li class="flex items-start gap-3">
                <svg viewBox="0 0 24 24" class="mt-0.5 h-5 w-5 flex-shrink-0 text-black/30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hola&#64;osteomer.com
              </li>
            </ul>
            <div class="mt-8">
              <a
                routerLink="/contacto"
                class="inline-block rounded border border-black/20 px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                {{ 'HOME.CONTACT_CTA' | translate }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class HomeComponent implements OnInit, OnDestroy {
  backgrounds = ['assets/img/0.jpg', 'assets/img/1.jpg', 'assets/img/2.jpg'];
  currentIndex = 0;
  nextIndex = 1;
  showNext = false;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextIndex = (this.currentIndex + 1) % this.backgrounds.length;
      this.showNext = true;
      setTimeout(() => {
        this.currentIndex = this.nextIndex;
        this.showNext = false;
      }, 1000);
    }, 20000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
