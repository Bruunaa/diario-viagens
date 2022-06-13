import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  faGlobeAmericas = faGlobeAmericas ;

  constructor(
    private authService: AuthService,
    private toast: HotToastService) {}

  logged$?: Observable<any>;

  logout() {
    this.authService.logout('/login').pipe(
      this.toast.observe({
        success: 'Até uma próxima viagem!'
      })
    ).subscribe();
  }

  ngOnInit(): void {
    this.logged$ = this.authService.logged;
  }
}
