import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onClick($event: Event) {

  }

}
