import { Component, OnInit } from '@angular/core';
import { OsteomerDataService } from '../../shared/services/osteomer-data.service';
import { TeamMember } from '../../shared/models/osteomer-data.model';

@Component({
  selector: 'app-team',
  standalone: true,
  template: `
    <section class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="mb-16 max-w-2xl">
        <span class="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
          Quiénes somos
        </span>
        <h1 class="text-3xl font-black tracking-[-0.02em] md:text-4xl">
          Nuestro equipo
        </h1>
        <p class="mt-4 text-base leading-relaxed text-black/50">
          Profesionales con vocación, formación continua y un enfoque humano que pone tus necesidades en el centro de cada tratamiento.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        @for (member of team; track member.id) {
          <article class="border border-black/5 bg-white p-8 transition-all duration-300 hover:border-black/20 rounded">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black/5">
              <span class="text-xl font-black tracking-[-0.02em] text-black/30">
                {{ getInitials(member.name) }}
              </span>
            </div>
            <h3 class="text-lg font-extrabold tracking-[-0.02em]">{{ member.name }}</h3>
            <p class="mt-1 text-sm font-semibold text-black/40">{{ member.title }}</p>
            <p class="mt-4 text-sm leading-relaxed text-black/50">{{ member.bio }}</p>
            <div class="mt-6 flex flex-wrap gap-2">
              @for (spec of member.specialties; track spec) {
                <span class="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/50">
                  {{ spec }}
                </span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: ``
})
export class TeamComponent implements OnInit {
  team: TeamMember[] = [];

  constructor(private dataService: OsteomerDataService) {}

  ngOnInit(): void {
    this.dataService.getTeam().subscribe(data => {
      this.team = data;
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
