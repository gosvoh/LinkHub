import {Component, OnInit} from '@angular/core';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-skill-tag',
  template: `
    <ng-content></ng-content>
    <fa-icon [icon]="faTrashCan"></fa-icon>`,
  styleUrls: ['./skill-tag.component.scss']
})
export class SkillTagComponent implements OnInit {
  faTrashCan = faTrashCan;

  constructor() {
  }

  ngOnInit(): void {
  }

}
