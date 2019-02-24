import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: Array<Object>;
  @Input() enable: boolean;
  open: boolean;
  selected: string;

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (!this.ele.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  constructor(private ele: ElementRef) {
    this.options = [];
  }

  ngOnInit() {
  }

  toggleDropdown(e) {
    if (!this.enable) {
      return;
    }
    this.open = !this.open;
  }

  onSelect(option) {
    this.open = false;
    this.selected = option;
  }

}
