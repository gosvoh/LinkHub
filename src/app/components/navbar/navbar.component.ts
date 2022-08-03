import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUrl = '';

  constructor(public auth: AuthService, private router: Router) {
    router.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.currentUrl = url.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('user');
    this.auth.logged = false;
    this.auth.user.login = '';
    this.auth.user.email = '';
    this.auth.user.password = '';
  }
}
