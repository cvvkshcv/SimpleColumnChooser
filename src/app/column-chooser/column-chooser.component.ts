import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { ColumnChooserDirective } from './column-chooser.directive';

@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class ColumnChooserComponent {
  @Input() chooser: ColumnChooserDirective;
  showMenu: boolean = false;
  constructor(private ele: ElementRef) {}

  onClick(event) {
    if (!this.ele.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }

  selectionChange(index, event) {
    this.chooser.toggleColumn(index, event.target.checked);
  }
}
