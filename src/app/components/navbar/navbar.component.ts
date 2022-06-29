import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  auth: AuthService;
  currentUrl = '';

  constructor(authService: AuthService, private router: Router) {
    this.auth = authService;
    router.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.currentUrl = url.urlAfterRedirects;        
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.isLoggedIn = false;
  }

  login() {
    this.auth.isLoggedIn = true;
  }
}
