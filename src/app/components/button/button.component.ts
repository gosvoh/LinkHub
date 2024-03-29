import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type = 'accent';

  constructor() {}

  ngOnInit(): void {}
}
