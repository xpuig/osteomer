import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-osteopatia',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex min-h-[70vh] flex-col justify-center pt-32 pb-24">
          <h1 class="text-6xl font-extrabold text-black uppercase tracking-tighter">
            {{ 'SECTIONS.OSTEOPATHY' | translate }}
          </h1>
          <p class="mt-6 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
            {{ 'SECTIONS.OSTEOPATHY_DESC' | translate }}
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class OsteopatiaComponent {}
