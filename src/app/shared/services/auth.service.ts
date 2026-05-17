import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from './supabase.service';

export interface AuthUser {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private supabase: SupabaseService) {
    this.supabase.client.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        this.userSubject.next({ email: session.user.email || '' });
      } else {
        this.userSubject.next(null);
      }
    });

    this.supabase.client.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        this.userSubject.next({ email: data.session.user.email || '' });
      }
    });
  }

  get user(): AuthUser | null {
    return this.userSubject.value;
  }

  get isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  async login(email: string, password: string): Promise<string | null> {
    const { error } = await this.supabase.client.auth.signInWithPassword({ email, password });
    return error?.message || null;
  }

  async logout(): Promise<void> {
    await this.supabase.client.auth.signOut();
  }
}
