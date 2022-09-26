import { Component } from '@angular/core';
import { IndexComponent } from './layout/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <app-navbar
      [ngClass]="{ margined: currentUrl !== '' }"
    ></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'linkhub';
  public currentUrl = '';

  constructor(private router: Router) {
    router.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.currentUrl = url.urlAfterRedirects;
      }
    });
  }
}
