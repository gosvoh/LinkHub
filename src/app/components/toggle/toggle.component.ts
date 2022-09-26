import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() label = '';
  @Input() enabled = false;
  @Input() interectable = true;
  @Input() name = '';
  @Input() id = '';

  constructor() {}

  ngOnInit(): void {}
}
