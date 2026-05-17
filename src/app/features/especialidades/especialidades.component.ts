import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex min-h-[70vh] flex-col justify-center pt-32 pb-24">
          <h1 class="text-6xl font-bold text-black uppercase tracking-tighter">
            {{ 'SECTIONS.SPECIALTIES' | translate }}
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-black/80 md:text-xl">
            {{ 'SECTIONS.SPECIALTIES_DESC' | translate }}
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class EspecialidadesComponent {}
