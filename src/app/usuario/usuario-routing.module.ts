import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiarioListComponent } from '../diarios/components/diario-list/diario-list.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: 'diarios', component: DiarioListComponent },
  { path: ':id', component: UsuarioComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
