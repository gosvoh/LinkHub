import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: `<input
    type="text"
    name="filter"
    id="filter"
    placeholder="{{ placeholder }}"
  />`,
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() placeholder: string;

  constructor() {}

  ngOnInit(): void {}
}
