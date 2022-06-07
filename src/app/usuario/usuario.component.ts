import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Diario } from '../core/models/diario';
import { DiariosService } from '../core/services/diarios/diarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  diarioUsuario$?: Observable<Diario[]>;

  constructor(
    private diariosService: DiariosService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.diarioUsuario$ = this.diariosService.getUsuarioDiario(this.route.snapshot.params['id']);
  }

}
