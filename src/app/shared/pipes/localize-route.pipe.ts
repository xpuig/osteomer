import { Pipe, PipeTransform } from '@angular/core';
import { PageKey } from '../i18n/localized-routes';
import { LocalizedRouteService } from '../services/localized-route.service';

@Pipe({
  name: 'localizeRoute',
  pure: false,
  standalone: true
})
export class LocalizeRoutePipe implements PipeTransform {
  constructor(private routeService: LocalizedRouteService) {}

  transform(page: PageKey): string {
    return this.routeService.path(page);
  }
}
