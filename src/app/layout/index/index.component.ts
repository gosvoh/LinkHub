import { Component, OnInit } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onScroll($event: Event) {
    console.log(($event.target));
  }

}
