import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { OsteomerDataService } from '../../shared/services/osteomer-data.service';
import { Treatment } from '../../shared/models/osteomer-data.model';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { PniComponent } from '../pni/pni.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ServiceCardComponent, PniComponent],
  template: `
    <section class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex min-h-[80vh] flex-col justify-center py-24 md:py-32">
        <span class="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
          Clínica de Salud Integral
        </span>
        <h1 class="max-w-4xl text-4xl font-black tracking-[-0.02em] leading-[1.1] md:text-6xl lg:text-7xl">
          Reequilibramos tu cuerpo,<br>
          <span class="text-black/40">transformamos tu salud.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-black/50 md:text-lg">
          Clínica de Osteopatía y Fisioterapia avanzada en el corazón de Barcelona.
          Especialistas en salud integral con enfoque humano y científico.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <a
            routerLink="/servicios"
            class="inline-block rounded bg-black px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-black/80"
          >
            Descubre nuestros tratamientos
          </a>
          <a
            href="#"
            class="inline-block rounded border border-black/20 px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Solicita tu primera visita
          </a>
        </div>
      </div>
    </section>

    <section id="servicios" class="bg-osteomer-gray">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div class="mb-16 max-w-2xl">
          <span class="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
            Nuestra expertise
          </span>
          <h2 class="text-3xl font-black tracking-[-0.02em] md:text-4xl">
            Áreas de tratamiento
          </h2>
          <p class="mt-4 text-base leading-relaxed text-black/50">
            Abordamos tu salud desde una perspectiva integral, combinando técnicas manuales avanzadas con el conocimiento más actualizado del cuerpo humano.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          @for (t of treatments; track t.id; let i = $index) {
            <app-service-card
              [treatment]="t"
              [variant]="i === 0 ? 'large' : 'normal'"
            ></app-service-card>
          }
        </div>
      </div>
    </section>

    <app-pni></app-pni>
  `,
  styles: ``
})
export class HomeComponent implements OnInit, OnDestroy {
  treatments: Treatment[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private dataService: OsteomerDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService.getTreatments().subscribe(data => {
      this.treatments = data;
    });

    this.route.fragment.pipe(takeUntil(this.destroy$)).subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
