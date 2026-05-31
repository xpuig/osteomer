import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LocalizedRouteService } from './shared/services/localized-route.service';

const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', overflow: 'hidden' }),
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%', top: 0, left: 0 })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate('300ms 100ms ease-out', style({ opacity: 1 }))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
<app-header></app-header>
<main class="relative" [@routeAnimations]="getRouteAnimationState(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</main>
<app-footer></app-footer>
  `,
  animations: [routeAnimations]
})
export class AppComponent {
  constructor(_localizedRoutes: LocalizedRouteService) {}

  getRouteAnimationState(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? '';
  }
}
