import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailJSParams {
  from_name: string;
  from_email: string;
  from_phone: string;
  message: string;
  date: string;
  time: string;
  to_email: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {
  private publicKey = '-yUrZk3HqZxFM6XkA';
  private serviceId = 'service_vdddy7d';
  private templateId = 'template_oi5vwbg';

  init(): void {
    if (this.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.publicKey);
    }
  }

  isConfigured(): boolean {
    return !this.publicKey.includes('YOUR_');
  }

  send(params: Record<string, unknown>): Promise<any> {
    return emailjs.send(this.serviceId, this.templateId, params);
  }
}
