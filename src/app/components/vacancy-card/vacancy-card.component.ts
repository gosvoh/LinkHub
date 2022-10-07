import { Component, OnInit } from '@angular/core';
import { ResumeCardComponent } from '../resume-card/resume-card.component';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.scss'],
})
export class VacancyCardComponent extends ResumeCardComponent {}
