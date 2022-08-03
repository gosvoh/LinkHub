import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {faMagnifyingGlass, faFilter} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-filter',
  template: `
    <fa-icon [ngClass]="input ? 'focused' : ''" class="faMagnifyingGlass" [icon]="faMagnifyingGlass"></fa-icon>
    <input
      type="text"
      name="filter"
      id="filter"
      placeholder="{{ placeholder }}"
      (input)="changed($event)"
    />
    <fa-icon class="faFilter" [icon]="faFilter"></fa-icon>
  `,
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() placeholder: string;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  input = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  changed($event: Event) {
    this.input = ($event.target as HTMLInputElement).value;
  }
}
