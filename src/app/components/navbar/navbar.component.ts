import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  auth: AuthService;

  constructor(authService: AuthService) {
    this.auth = authService;
  }

  ngOnInit(): void {}

  logout() { this.auth.isLoggedIn = false; }

  login() { this.auth.isLoggedIn = true; }
}
