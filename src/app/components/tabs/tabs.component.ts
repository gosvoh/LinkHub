import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

import {TabComponent} from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul>
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <a>{{ tab.title }}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => {
      tab.active = false;
      tab.hide();
    });
    tab.active = true;
    tab.show();
  }
}
