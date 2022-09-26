import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<a href="https://github.com/gosvoh/">gosvoh</a> 2022`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
