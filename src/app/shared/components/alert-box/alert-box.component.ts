import { Component, OnInit, Input, HostListener, OnChanges, Output, EventEmitter } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('200ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class AlertBoxComponent implements OnInit, OnChanges {

  @Input() id;
  @Input() open: boolean;
  @Input() type: string;
  /*
  @Input : buttons
  accepts Object as a property. Bootstrap style types used to configure
  Syntax : {'type of button' : 'Text to show in button' }
  Button types :
  * success
  * danger
  * info
  * warning
  * primary
  Ex :
  {
    'danger' : 'Delete'
  }
  */
  @Input() buttons: Object = {};

  @Output() onClose = new EventEmitter();
  @Output() onOpen = new EventEmitter();

  @Output() onDanger = new EventEmitter();
  @Output() onInfo = new EventEmitter();
  @Output() onSuccess = new EventEmitter();
  @Output() onWarning = new EventEmitter();
  @Output() onPrimary = new EventEmitter();


  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.close();
  }

  constructor() { }

  ngOnInit() {
    if (typeof(this.buttons) !== 'object') {
      console.error('Button options must be an object');
      this.buttons = {};
    }
  }

  close(event?) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    this.open = false;
    this.onClose.next(this.id);
  }

  ngOnChanges(changes) {
    if (changes['open'].isFirstChange()) { return; }
    if (this.open) {
      this.onOpen.next(this.id);
    } else {
      this.onClose.next(this.id);
    }
  }

  focusButton(cancelButton) {
    setTimeout(() => cancelButton.focus(), 100);
  }

  dangerClick() {
    this.onDanger.next(this.id);
  }
  infoClick() {
    this.onInfo.next(this.id);
  }
  warningClick() {
    this.onWarning.next(this.id);
  }
  successClick() {
    this.onSuccess.next(this.id);
  }
  primaryClick() {
    this.onPrimary.next(this.id);
  }

}
