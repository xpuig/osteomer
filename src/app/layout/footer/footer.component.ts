import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="border-t border-black/5 bg-white">
      <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div class="grid gap-12 md:grid-cols-3">
          <div>
            <span class="text-lg font-extrabold tracking-[-0.02em]">OSTEOMER</span>
            <p class="mt-3 text-sm leading-relaxed text-black/50">
              Clínica de Osteopatía y Fisioterapia avanzada en Barcelona.
              Recupera tu equilibrio, transforma tu salud.
            </p>
          </div>
          <div>
            <h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-black/40">Servicios</h4>
            <ul class="space-y-2 text-sm text-black/50">
              <li><a routerLink="/servicios" class="transition-colors hover:text-black">Osteopatía</a></li>
              <li><a routerLink="/servicios" class="transition-colors hover:text-black">Fisioterapia Avanzada</a></li>
              <li><a routerLink="/servicios" class="transition-colors hover:text-black">Posturología Dinámica</a></li>
              <li><a routerLink="/servicios" class="transition-colors hover:text-black">PNI Clínica</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-black/40">Contacto</h4>
            <ul class="space-y-2 text-sm text-black/50">
              <li>Carrer de Pau Claris 123, 08009 Barcelona</li>
              <li>+34 934 567 890</li>
              <li>hola&#64;osteomer.com</li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-black/5 pt-8 text-center text-xs text-black/30">
          &copy; 2026 OSTEOMER. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {}
