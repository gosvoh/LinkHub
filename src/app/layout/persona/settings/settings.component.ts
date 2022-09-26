import { Component, OnInit } from '@angular/core';
import {
  faGoogle,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  faGoogle = faGoogle;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
