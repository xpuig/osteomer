import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3001/bookings';

  constructor(private http: HttpClient) {}

  create(booking: Omit<Booking, 'id' | 'createdAt'>): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, {
      ...booking,
      createdAt: new Date().toISOString()
    });
  }

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
