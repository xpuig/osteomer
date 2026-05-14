import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Treatment } from '../../models/osteomer-data.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <article
      class="group border border-black/10 bg-white p-8 transition-all duration-300 hover:border-black/30 cursor-pointer rounded"
      [ngClass]="variant === 'large' ? 'col-span-1 md:col-span-2' : ''"
    >
      <div class="mb-6 flex h-10 w-10 items-center justify-center text-black">
        <span class="h-8 w-8" [innerHTML]="treatment.icon"></span>
      </div>
      <span class="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-black/40">
        {{ treatment.category }}
      </span>
      <h3 class="mb-3 text-xl font-extrabold tracking-[-0.02em]">{{ treatment.title }}</h3>
      <p class="mb-6 text-sm leading-relaxed text-black/60">{{ treatment.description }}</p>
      <ul class="space-y-2">
        @for (detail of treatment.details; track detail) {
          <li class="flex items-start gap-2 text-sm text-black/50">
            <span class="mt-1 block h-1 w-1 flex-shrink-0 rounded-full bg-black/30"></span>
            {{ detail }}
          </li>
        }
      </ul>
    </article>
  `,
  styles: ``
})
export class ServiceCardComponent {
  @Input({ required: true }) treatment!: Treatment;
  @Input() variant: 'normal' | 'large' = 'normal';
}
