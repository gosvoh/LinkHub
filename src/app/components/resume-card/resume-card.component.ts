import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  connect($event: Event) {

  }

}
