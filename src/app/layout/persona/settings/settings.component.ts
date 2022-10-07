import { Component, OnInit } from '@angular/core';
import {
  faGoogle,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { User } from '../../../user.model';
import { AuthService } from '../../../auth.service';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  faGoogle = faGoogle;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  user: User;

  constructor(public auth: AuthService) {
    this.user = auth.user;
  }

  ngOnInit(): void {
    setTimeout(() => this.reset(), 1000);
  }

  submit($event: Event) {
    localStorage.setItem('user', JSON.stringify(this.auth.user));
    let settings = document.querySelectorAll('input');
    settings.forEach((input) => {
      if (input.name.includes('password')) return;
      if (input.type === 'checkbox')
        localStorage.setItem(input.name, String(input.checked));
      else localStorage.setItem(input.name, input.value);
    });
    let btn = ($event.target as HTMLElement).closest('app-button');
    if (btn == null) return;
    btn.classList.add('disabled');
    setTimeout(() => btn?.classList.remove('disabled'), 5000);
  }

  reset() {
    let settings = document.querySelectorAll('input');
    settings.forEach((input) => {
      console.log(input);
      if (input.name.includes('password')) return;
      let option = localStorage.getItem(input.name);
      if (option === null) return;
      console.log(option);
      if (input.type === 'checkbox') input.checked = JSON.parse(option);
      else input.value = JSON.parse(option);
    });
  }

  link(event: Event) {
    let el = (event.target as HTMLElement).closest('app-button');
    if (el == null || el.querySelector('span') == null) return;
    let span = el.querySelector('span');
    if (span == null || span.textContent == null) return;
    if (el.hasAttribute('linked')) {
      el.removeAttribute('linked');
      span.textContent = span.textContent.replace('Отключить', 'Подключить');
      el.setAttribute('type', 'other');
    } else {
      el.setAttribute('linked', '');
      span.textContent = span.textContent.replace('Подключить', 'Отключить');
      el.setAttribute('type', 'secondary');
    }
    // this.submit();
    // this.ngOnInit();
  }
}
