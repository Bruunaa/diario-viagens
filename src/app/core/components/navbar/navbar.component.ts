import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean = false;

  faGlobeAmericas = faPaperPlane ;

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
    this.isDarkTheme = localStorage.getItem('theme')==="Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme? "Dark" : "Light");
  }
}
