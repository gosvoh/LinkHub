import {Component, OnInit} from '@angular/core';
import {faGoogle, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faGoogle = faGoogle;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(public auth: AuthService, private router: Router) {
    this.auth = auth;
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.auth.user.login) this.auth.user.login = 'Unknown';
    this.auth.logged = true;
    localStorage.setItem('user', JSON.stringify(this.auth.user));
    this.router.navigate(['/']);
  }

}
