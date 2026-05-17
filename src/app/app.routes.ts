import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { OsteopatiaComponent } from './features/osteopatia/osteopatia.component';
import { EspecialidadesComponent } from './features/especialidades/especialidades.component';
import { SobreMiComponent } from './features/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './features/contacto/contacto.component';
import { BookingComponent } from './features/booking/booking.component';
import { BackofficeComponent } from './features/backoffice/backoffice.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'osteopatia',
    component: OsteopatiaComponent,
    data: { animation: 'osteopatia' }
  },
  {
    path: 'especialidades',
    component: EspecialidadesComponent,
    data: { animation: 'especialidades' }
  },
  {
    path: 'sobre-mi',
    component: SobreMiComponent,
    data: { animation: 'sobre-mi' }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { animation: 'contacto' }
  },
  {
    path: 'cita-online',
    component: BookingComponent,
    data: { animation: 'cita-online' }
  },
  {
    path: 'backoffice',
    component: BackofficeComponent,
    data: { animation: 'backoffice' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
