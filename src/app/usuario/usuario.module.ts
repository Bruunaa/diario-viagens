import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
  ]
})
export class UsuarioModule { }
