import { RouterModule, Routes } from '@angular/router';

import { Pagina1Component } from "./pagina1/pagina1.component";
import { Pagina2Component } from "./pagina2/pagina2.component";
import { Pagina3Component } from "./pagina3/pagina3.component";

import { AuthGuardService } from "./servicios/auth-guard.service";

const app_routes: Routes = [
  { path: 'pag1', component: Pagina1Component },
  {
      path: 'pag2', 
      component: Pagina2Component,
      canActivate: [ AuthGuardService ]
  },
  { path: 'pag3', component: Pagina3Component },
  { path: '**', pathMatch: 'full', redirectTo: 'pag1' }
];

export const app_routing = RouterModule.forRoot(app_routes);
