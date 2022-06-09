import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  firstFormGroup = this.fb.group({
    nome: ['', [Validators.required]],
  });

  secondFormGroup = this.fb.group({
    nick: ['', [Validators.required]],
  });

  thirdFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  fourthFormGroup = this.fb.group({
    senha: ['', [Validators.required, Validators.minLength(8)]],
  });

  fifthFormGroup = this.fb.group({
    confirma_senha: [''],
  });

  isLinear = true;
  signupForm: any;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: HotToastService,
  ) { }

  confirmaSenha() {
    if (
      this.fourthFormGroup.get('senha')!.value !== this.fifthFormGroup.get('confirma_senha')!.value) {
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    if (this.confirmaSenha()) {
      const { email, senha, nick, nome } = this.signupForm.value;
      this.authService
        .signupEmail(email, senha, nome, nick)
        .pipe(
          this.toast.observe({
            success: 'Usuário criado com sucesso',
            error: 'Um erro ocorreu',
            loading: 'Criando usuário...',
          })
        )
        .subscribe();
    } alert('senhas não conferem');
  }

  onLoginFacebook() {
    this.authService
      .loginFacebook()
      .pipe(
        this.toast.observe({
          success: 'Login efetuado',
          error: 'Operação cancelada',
          loading: 'Fazendo login...',
        })
      )
      .subscribe();
  }

  onLoginGoogle() {
    this.authService
      .loginGoogle()
      .pipe(
        this.toast.observe({
          success: 'Login efetuado',
          error: 'Operação cancelada',
          loading: 'Fazendo login...',
        })
      )
      .subscribe();
  }

  ngOnInit(): void { }
  siteKey: string = "6LctMUcgAAAAAERwiw_KjqbJodnSPLrELJUORFjj";
}