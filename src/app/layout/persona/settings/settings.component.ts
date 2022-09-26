import {Component, OnInit} from '@angular/core';
import {
  faGoogle,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {User} from "../../../user.model";
import {AuthService} from "../../../auth.service";

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
  }

  submit() {
    localStorage.setItem('user', JSON.stringify(this.auth.user));
    let settings = document.querySelectorAll("input");
    settings.forEach(input => {
      if (input.name.includes('password')) return;
      if (input.type === 'checkbox') localStorage.setItem(input.name, String(input.checked));
      else localStorage.setItem(input.name, input.value);
    });
  }

  reset() {
    let settings = document.querySelectorAll("input");
    settings.forEach(input => {
      if (input.name.includes('password')) return;
      let option = localStorage.getItem(input.name);
      if (option === null) return;
      if (input.type === 'checkbox') input.checked = JSON.parse(option);
      else input.value = JSON.parse(option);
    });
  }
}
