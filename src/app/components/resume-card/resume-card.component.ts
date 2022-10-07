import {
  Component,
  OnInit,
} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss'],
})
export class ResumeCardComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connect($event: Event) {
    if (!this.auth.logged) this.router.navigate(['/register']);
    let btn = ($event.target as HTMLElement).closest('app-button');
    if (btn == null) return;
    btn.classList.add('disabled');
    setTimeout(() => btn?.classList.remove('disabled'), 5000);
  }
}
