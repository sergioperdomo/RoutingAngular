import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { Pagina404Component } from './pagina404/pagina404.component';

export const routes: Routes = [
    {path:'', component: InicioComponent}, // La dejaremos vacía por que va a ser la ruta de inicio.
    {path:'ventas', component: VentasComponent},
    {path:'compras', component: ComprasComponent},
    {path:'**', component: Pagina404Component}
];
