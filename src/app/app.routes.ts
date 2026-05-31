import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { OsteopatiaComponent } from './features/osteopatia/osteopatia.component';
import { EspecialidadesComponent } from './features/especialidades/especialidades.component';
import { SobreMiComponent } from './features/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './features/contacto/contacto.component';
import { BookingComponent } from './features/booking/booking.component';
import { BackofficeComponent } from './features/backoffice/backoffice.component';

const caRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'osteopatia', component: OsteopatiaComponent, data: { animation: 'osteopatia' } },
  { path: 'especialitats', component: EspecialidadesComponent, data: { animation: 'especialidades' } },
  { path: 'sobre-mi', component: SobreMiComponent, data: { animation: 'sobre-mi' } },
  { path: 'contacte', component: ContactoComponent, data: { animation: 'contacto' } },
  { path: 'cita-online', component: BookingComponent, data: { animation: 'cita-online' } }
];

const esRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'osteopatia', component: OsteopatiaComponent, data: { animation: 'osteopatia' } },
  { path: 'especialidades', component: EspecialidadesComponent, data: { animation: 'especialidades' } },
  { path: 'sobre-mi', component: SobreMiComponent, data: { animation: 'sobre-mi' } },
  { path: 'contacto', component: ContactoComponent, data: { animation: 'contacto' } },
  { path: 'cita-online', component: BookingComponent, data: { animation: 'cita-online' } }
];

export const routes: Routes = [
  { path: 'ca', children: caRoutes },
  { path: 'es', children: esRoutes },
  { path: 'backoffice', component: BackofficeComponent, data: { animation: 'backoffice' } },
  { path: '', redirectTo: 'ca', pathMatch: 'full' },
  { path: 'osteopatia', redirectTo: 'ca/osteopatia', pathMatch: 'full' },
  { path: 'especialidades', redirectTo: 'ca/especialitats', pathMatch: 'full' },
  { path: 'especialitats', redirectTo: 'ca/especialitats', pathMatch: 'full' },
  { path: 'sobre-mi', redirectTo: 'ca/sobre-mi', pathMatch: 'full' },
  { path: 'contacto', redirectTo: 'ca/contacte', pathMatch: 'full' },
  { path: 'contacte', redirectTo: 'ca/contacte', pathMatch: 'full' },
  { path: 'cita-online', redirectTo: 'ca/cita-online', pathMatch: 'full' },
  { path: '**', redirectTo: 'ca' }
];
