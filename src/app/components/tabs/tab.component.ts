import {Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-tab',
  styleUrls: ['./tab.component.scss'],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor(private elementRef: ElementRef) {
  }

  hide() {
    this.elementRef.nativeElement.classList.remove('active');
  }

  show() {
    this.elementRef.nativeElement.classList.add('active');
  }
}
