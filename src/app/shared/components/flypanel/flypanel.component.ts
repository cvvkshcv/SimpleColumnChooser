import { Component, OnInit,
  Input, HostBinding,
  ChangeDetectionStrategy,
  OnChanges, Output, EventEmitter, ViewChild, ElementRef, HostListener
} from '@angular/core';


@Component({
  selector: 'app-flypanel',
  templateUrl: './flypanel.component.html',
  styleUrls: ['./flypanel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlypanelComponent implements OnInit, OnChanges {

  className = 'close';
  mouseDown: boolean;

  @Input() open = false;
  @Input() headerStyle = {};
  @Input() placement: 'left' | 'rigth' = 'rigth';
  @Input() width = 250;
  @Input() height = 300;
  @Input() top = 48;

  @Output() onOpen = new EventEmitter<any>();
  @Output() closeClick = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();

  @HostBinding('class.show') someField: boolean;
  @ViewChild('flypanel') flypanel: ElementRef;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {}

  ngOnChanges(): void {
    console.log(this.open);
    if (this.open) {
      this.className = 'open';
      this.onOpen.next();
    } else {
      this.className = 'close';
      this.onClose.next();
    }
  }

  closePanel() {
    this.open = !this.open;
    this.ngOnChanges();
    this.closeClick.next();
  }

  startResize(event) {
    event.preventDefault();
    this.mouseDown = true;
    // const flypanel = document.getElementById('flypanel');
    const windowStartingDimensionInfo = this.flypanel.nativeElement.getBoundingClientRect();

    document.addEventListener('mousemove', (_event) => {
      if (this.mouseDown) {
        const screenY = _event.screenY;
        if (screenY > 200) {
          this.flypanel.nativeElement.style.height = (windowStartingDimensionInfo.height + event.screenY - screenY) + 'px';
        }
      }
    });
    document.addEventListener('mouseup', (_event) => {
      this.mouseDown = false;
    });
  }
}
