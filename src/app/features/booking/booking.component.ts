import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, DatePipe } from '@angular/common';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../shared/services/language.service';
import { Booking } from '../../shared/services/booking.service';
import { SupabaseService } from '../../shared/services/supabase.service';
import { EmailJSService } from '../../shared/services/emailjs.service';

interface DayInfo {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf, DatePipe, TranslatePipe],
  template: `
    <section class="bg-white">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="pt-32 pb-24">
          <h1 class="text-4xl font-bold tracking-[-0.02em] text-black md:text-5xl">
            {{ 'BOOKING.TITLE' | translate }}
          </h1>
          <p class="mt-4 text-lg text-black/70">
            {{ 'BOOKING.SUBTITLE' | translate }}
          </p>

          <div class="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <div class="rounded border border-black/20 p-6">
                <div class="mb-6 flex items-center justify-between">
                  <button (click)="prevMonth()" [ngClass]="canGoPrev() ? 'cursor-pointer text-black/65 hover:text-black' : 'cursor-default text-black/20'" class="transition-colors">
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <span class="text-lg font-bold text-black">{{ getMonthName() }} {{ currentYear }}</span>
                  <button (click)="nextMonth()" class="cursor-pointer text-black/65 transition-colors hover:text-black">
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </div>
                <div class="grid grid-cols-7 gap-1">
                  <div *ngFor="let wd of weekDays" class="py-2 text-center text-xs font-semibold uppercase tracking-wider text-black/50">
                    {{ wd }}
                  </div>
                  <ng-container *ngFor="let day of calendarDays">
                    <button
                      (click)="selectDate(day)"
                      [disabled]="!day.isCurrentMonth || day.isPast"
                      class="aspect-square rounded text-sm transition-all duration-200"
                      [ngClass]="{
                        'text-black/85 hover:bg-black/10 cursor-pointer': day.isCurrentMonth && !day.isPast && !day.isSelected,
                        'text-black/20 cursor-default': !day.isCurrentMonth || day.isPast,
                        'bg-black text-white hover:bg-black': day.isSelected,
                        'bg-black/8': !day.isSelected && day.isToday
                      }"
                    >
                      {{ day.day }}
                    </button>
                  </ng-container>
                </div>
              </div>
            </div>

            <div>
              <div class="rounded border border-black/20 p-6">
                <h3 class="mb-4 text-lg font-bold text-black">
                  {{ 'BOOKING.SELECT_TIME' | translate }}
                </h3>
                <div *ngIf="!selectedDate" class="flex items-center justify-center py-12 text-sm text-black/50">
                  <svg viewBox="0 0 24 24" class="mr-2 h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {{ 'BOOKING.SELECT_DATE_HINT' | translate }}
                </div>
                <div *ngIf="selectedDate" class="grid grid-cols-2 gap-2">
                  <button
                    *ngFor="let slot of timeSlots"
                    (click)="selectTime(slot)"
                    [disabled]="slot.booked"
                    class="rounded border px-4 py-3 text-sm font-medium transition-all duration-200"
                    [ngClass]="slot.booked ? 'border-black/10 text-black/25 cursor-not-allowed line-through' : slot.selected ? 'bg-black text-white border-black' : 'border-black/20 text-black/70 hover:border-black/50 hover:text-black'"
                  >
                    {{ slot.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12" *ngIf="selectedDate && selectedTime">
            <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="mx-auto max-w-xl">
              <h2 class="mb-8 text-2xl font-bold tracking-[-0.02em] text-black">
                {{ 'BOOKING.FORM_TITLE' | translate }}
              </h2>
              <div class="mb-4 rounded border border-black/10 bg-osteomer-gray p-4 text-sm text-black/70">
                <span class="font-semibold text-black">{{ selectedDate | date: 'fullDate' }}</span>
                <span class="mx-2">&middot;</span>
                <span class="font-semibold text-black">{{ selectedTime }}</span>
              </div>

              <div class="mb-5">
                <label class="mb-1.5 block text-sm font-semibold text-black">{{ 'BOOKING.NAME' | translate }} *</label>
                <input formControlName="name" type="text" class="w-full rounded border border-black/20 px-4 py-3 text-base text-black outline-none transition-colors focus:border-black" placeholder="Ex: Maria Garcia" />
                <p *ngIf="bookingForm.get('name')?.invalid && bookingForm.get('name')?.touched" class="mt-1 text-xs text-black/55">{{ 'BOOKING.REQUIRED' | translate }}</p>
              </div>

              <div class="mb-5">
                <label class="mb-1.5 block text-sm font-semibold text-black">{{ 'BOOKING.EMAIL' | translate }} *</label>
                <input formControlName="email" type="email" class="w-full rounded border border-black/20 px-4 py-3 text-base text-black outline-none transition-colors focus:border-black" placeholder="Ex: maria@gmail.com" />
                <p *ngIf="bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched" class="mt-1 text-xs text-black/55">{{ 'BOOKING.INVALID_EMAIL' | translate }}</p>
              </div>

              <div class="mb-5">
                <label class="mb-1.5 block text-sm font-semibold text-black">{{ 'BOOKING.PHONE' | translate }} *</label>
                <input formControlName="phone" type="tel" class="w-full rounded border border-black/20 px-4 py-3 text-base text-black outline-none transition-colors focus:border-black" placeholder="Ex: +34 612 345 678" />
                <p *ngIf="bookingForm.get('phone')?.invalid && bookingForm.get('phone')?.touched" class="mt-1 text-xs text-black/55">{{ 'BOOKING.REQUIRED' | translate }}</p>
              </div>

              <div class="mb-8">
                <label class="mb-1.5 block text-sm font-semibold text-black">{{ 'BOOKING.MESSAGE' | translate }}</label>
                <textarea formControlName="message" rows="4" class="w-full rounded border border-black/20 px-4 py-3 text-base text-black outline-none transition-colors focus:border-black" placeholder="{{ 'BOOKING.MESSAGE_PLACEHOLDER' | translate }}"></textarea>
              </div>

              <button type="submit" [disabled]="bookingForm.invalid || submitted" class="w-full rounded bg-black px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50">
                <span *ngIf="!submitted">{{ 'BOOKING.SUBMIT' | translate }}</span>
                <span *ngIf="submitted">{{ 'BOOKING.SENT' | translate }}</span>
              </button>
            </form>
          </div>

          <div *ngIf="bookingSuccess" class="mx-auto mt-12 max-w-xl rounded border border-black/20 bg-osteomer-gray p-8 text-center">
            <svg viewBox="0 0 24 24" class="mx-auto mb-4 h-12 w-12 text-black/60" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <p class="text-lg text-black/80">{{ 'BOOKING.SUCCESS' | translate }}</p>
            <a [href]="mailtoLink" class="mt-4 inline-block rounded bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:bg-black/80">
              {{ 'BOOKING.OPEN_EMAIL' | translate }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class BookingComponent implements OnInit {
  currentMonth: number;
  currentYear: number;
  calendarDays: DayInfo[] = [];
  weekDays: string[] = [];
  selectedDate: Date | null = null;
  timeSlots: { time: string; label: string; selected: boolean; booked: boolean }[] = [];
  selectedTime: string | null = null;
  bookingForm: FormGroup;
  submitted = false;
  bookingSuccess = false;
  mailtoLink = '';
  existingBookings: Booking[] = [];

  constructor(
    private fb: FormBuilder,
    private langService: LanguageService,
    private supabaseService: SupabaseService,
    private emailJSService: EmailJSService
  ) {
    const now = new Date();
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  get locale(): string {
    return this.langService.currentLangValue === 'ca' ? 'ca-ES' : 'es-ES';
  }

  ngOnInit(): void {
    this.generateWeekDays();
    this.generateCalendar();
    if (this.supabaseService.isConfigured()) {
      this.supabaseService.getAll().then(data => {
        this.existingBookings = data;
      }).catch(() => {});
    }
  }

  generateWeekDays(): void {
    const base = new Date(2024, 0, 1);
    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      this.weekDays.push(d.toLocaleDateString(this.locale, { weekday: 'short' }).replace('.', ''));
    }
  }

  getMonthName(): string {
    return new Date(this.currentYear, this.currentMonth)
      .toLocaleDateString(this.locale, { month: 'long' });
  }

  canGoPrev(): boolean {
    const now = new Date();
    return this.currentYear > now.getFullYear() || this.currentMonth > now.getMonth();
  }

  prevMonth(): void {
    if (!this.canGoPrev()) return;
    this.currentMonth--;
    if (this.currentMonth < 0) { this.currentMonth = 11; this.currentYear--; }
    this.generateCalendar();
    this.clearSelection();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) { this.currentMonth = 0; this.currentYear++; }
    this.generateCalendar();
    this.clearSelection();
  }

  generateCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.calendarDays = [];

    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = startOffset - 1; i >= 0; i--) {
      this.calendarDays.push(this.createDay(this.currentYear, this.currentMonth - 1, daysInPrevMonth - i, false, today));
    }
    for (let d = 1; d <= daysInMonth; d++) {
      this.calendarDays.push(this.createDay(this.currentYear, this.currentMonth, d, true, today));
    }
    const remaining = 42 - this.calendarDays.length;
    for (let d = 1; d <= remaining; d++) {
      this.calendarDays.push(this.createDay(this.currentYear, this.currentMonth + 1, d, false, today));
    }
  }

  private createDay(year: number, month: number, day: number, isCurrentMonth: boolean, today: Date): DayInfo {
    const date = new Date(year, month, day);
    return {
      date,
      day,
      isCurrentMonth,
      isToday: date.getTime() === today.getTime(),
      isPast: date.getTime() < today.getTime(),
      isSelected: false
    };
  }

  selectDate(day: DayInfo): void {
    if (!day.isCurrentMonth || day.isPast) return;
    this.calendarDays.forEach(d => d.isSelected = false);
    day.isSelected = true;
    this.selectedDate = day.date;
    this.selectedTime = null;
    this.submitted = false;
    this.bookingSuccess = false;
    this.generateTimeSlots(day.date);
  }

  generateTimeSlots(date: Date): void {
    const slots = ['09:00', '10:00', '11:00', '12:00', '16:00', '17:00', '18:00'];
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const dateKey = date.toLocaleDateString('es-ES');
    const bookedTimes = new Set(
      this.existingBookings.filter(b => b.date === dateKey).map(b => b.time)
    );
    this.timeSlots = slots.map(time => {
      const [h, m] = time.split(':').map(Number);
      const slotDate = new Date(date);
      slotDate.setHours(h, m, 0, 0);
      const past = isToday && slotDate <= now;
      const booked = bookedTimes.has(time);
      return { time, label: time, selected: false, available: !past && !booked, booked };
    }).filter(s => !s.booked || s.booked);
  }

  selectTime(slot: { time: string; label: string; selected: boolean; booked: boolean }): void {
    if (slot.booked) return;
    this.timeSlots.forEach(s => s.selected = false);
    slot.selected = true;
    this.selectedTime = slot.label;
    this.submitted = false;
    this.bookingSuccess = false;
  }

  private clearSelection(): void {
    this.selectedDate = null;
    this.selectedTime = null;
    this.timeSlots = [];
    this.submitted = false;
    this.bookingSuccess = false;
  }

  onSubmit(): void {
    if (this.bookingForm.invalid || !this.selectedDate || !this.selectedTime) return;
    this.submitted = true;

    const { name, email, phone, message } = this.bookingForm.value;
    const dateStr = this.selectedDate.toLocaleDateString(this.locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const dateShort = this.selectedDate.toLocaleDateString('es-ES');
    const time = this.selectedTime;

    if (this.supabaseService.isConfigured()) {
      this.supabaseService.create({ name, email, phone, message, date: dateShort, time }).catch(() => {});
    }

    const subject = encodeURIComponent(`Cita Online - ${name}`);
    const body = encodeURIComponent(
      `Sol·licitud de cita\n\n` +
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      `Telèfon: ${phone}\n` +
      `Data: ${dateStr}\n` +
      `Hora: ${time}\n` +
      `Missatge: ${message || '(sense missatge)'}\n\n` +
      `---\n` +
      `Missatge generat des del formulari de cita online d'Osteomer.`
    );
    this.mailtoLink = `mailto:xavipuig@gmail.com?subject=${subject}&body=${body}`;

    if (this.emailJSService.isConfigured()) {
      this.emailJSService.init();
      this.emailJSService.send({
        from_name: name,
        from_email: email,
        from_phone: phone,
        message: message || '(sense missatge)',
        date: dateStr,
        time,
        to_email: 'xavipuig@gmail.com'
      }).then(() => {
        this.bookingSuccess = true;
      }).catch(() => {
        this.bookingSuccess = true;
      });
    } else {
      this.bookingSuccess = true;
    }
  }
}
