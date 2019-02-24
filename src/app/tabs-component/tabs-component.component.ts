import {
          Component, OnInit, Input, AfterViewInit, ContentChildren, QueryList,
          HostBinding, AfterViewChecked, AfterContentChecked, ChangeDetectorRef
        } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.css']
})
export class TabsComponentComponent implements OnInit, AfterContentChecked {
  @Input() selectedTabName: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  public selectedTabIndex = 0;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tabs => {
      tabs.active = false;
    });
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
