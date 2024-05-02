import { CtrlactividadComponent } from './Actividades/ctrlactividad/ctrlactividad.component';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'Actividades/CtrlActividad',
    component: CtrlactividadComponent
},
{
    path: '',
    component: CtrlactividadComponent,
    pathMatch: 'full'
}];
