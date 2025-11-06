import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';
import { MedicoComponent} from './views/pages/medico/medico/medico.component';
import { ClienteComponent } from './views/pages/cliente/cliente/cliente.component';

const routes: Routes = [
  {
    path: '', component: CustomLayoutComponent, children: [
      { path: 'medico', component: MedicoComponent },
      { path: 'cliente', component: ClienteComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
