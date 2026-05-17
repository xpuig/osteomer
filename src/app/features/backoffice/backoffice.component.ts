import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingService, Booking } from '../../shared/services/booking.service';

@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe, RouterLink],
  template: `
    <section class="min-h-screen bg-osteomer-gray">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="py-16">
          <div class="mb-10 flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold tracking-[-0.02em] text-black">
                Backoffice — Citas
              </h1>
              <p class="mt-2 text-base text-black/65">
                {{ bookings.length }} reserva(s) recibida(s)
              </p>
            </div>
            <a routerLink="/" class="rounded border border-black/30 px-4 py-2 text-sm font-semibold text-black/70 transition-all hover:border-black hover:text-black">
              Volver a la web
            </a>
          </div>

          <div *ngIf="loading" class="py-20 text-center text-black/50">
            Cargando citas...
          </div>

          <div *ngIf="!loading && bookings.length === 0" class="rounded border border-black/10 bg-white py-20 text-center">
            <svg viewBox="0 0 24 24" class="mx-auto mb-4 h-12 w-12 text-black/25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            <p class="text-black/50">No hay citas registradas todavía.</p>
          </div>

          <div *ngIf="!loading && bookings.length > 0" class="overflow-hidden rounded border border-black/10 bg-white">
            <table class="w-full text-left text-sm">
              <thead class="border-b border-black/10 bg-black/5">
                <tr>
                  <th class="px-4 py-3 font-semibold text-black/70">Fecha</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Hora</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Nombre</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Email</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Teléfono</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Mensaje</th>
                  <th class="px-4 py-3 font-semibold text-black/70">Creado</th>
                  <th class="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-black/5">
                <tr *ngFor="let b of bookings" class="transition-colors hover:bg-black/[0.02]">
                  <td class="px-4 py-3 text-black/80">{{ b.date }}</td>
                  <td class="px-4 py-3 font-medium text-black">{{ b.time }}</td>
                  <td class="px-4 py-3 text-black/80">{{ b.name }}</td>
                  <td class="px-4 py-3 text-black/65">
                    <a [href]="'mailto:' + b.email" class="underline transition-colors hover:text-black">{{ b.email }}</a>
                  </td>
                  <td class="px-4 py-3 text-black/65">{{ b.phone }}</td>
                  <td class="max-w-xs truncate px-4 py-3 text-black/55" [title]="b.message || ''">{{ b.message || '—' }}</td>
                  <td class="whitespace-nowrap px-4 py-3 text-black/55">{{ b.createdAt | date: 'dd/MM/yyyy HH:mm' }}</td>
                  <td class="px-4 py-3">
                    <button (click)="deleteBooking(b)" class="text-xs text-black/40 underline transition-colors hover:text-black">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class BackofficeComponent implements OnInit {
  bookings: Booking[] = [];
  loading = true;

  constructor(private service: BookingService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => { this.bookings = data.reverse(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  deleteBooking(b: Booking): void {
    if (!b.id) return;
    this.service.delete(b.id).subscribe({
      next: () => { this.bookings = this.bookings.filter(item => item.id !== b.id); },
      error: () => {}
    });
  }
}
