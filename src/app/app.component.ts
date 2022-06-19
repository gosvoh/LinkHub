import { Component } from '@angular/core';
import { IndexComponent } from './layout/index/index.component';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
  <app-index></app-index>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linkhub';
}
