import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<a href="https://github.com/gosvoh/" target="_blank">gosvoh</a> 2022 for ITMO`,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
