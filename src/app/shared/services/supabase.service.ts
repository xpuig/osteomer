import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseConfig } from '../../../environments/supabase.config';
import { Booking } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  client: SupabaseClient;

  constructor() {
    this.client = createClient(supabaseConfig.url, supabaseConfig.anonKey);
  }

  isConfigured(): boolean {
    return !!supabaseConfig.url && !!supabaseConfig.anonKey;
  }

  async create(booking: Omit<Booking, 'id' | 'createdAt'>): Promise<any> {
    const { data, error } = await this.client
      .from('bookings')
      .insert({ ...booking, created_at: new Date().toISOString() })
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  async getAll(): Promise<Booking[]> {
    const { data, error } = await this.client
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.client
      .from('bookings')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
}
