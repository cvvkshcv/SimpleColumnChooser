import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizeTableCol]'
})
export class ResizeTableColDirective {

  mouseDown = false;
  windowStartingDimensionInfo;
  screenX = 0;
  child;

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.el.nativeElement.style.position = 'relative';
    this.child = document.createElement('div');
    this.child.style.cssText = `position: absolute;
    height: 100%;
    width: 3px;
    right: 0;
    background: #ccc;
    cursor: col-resize;`;
    this.child.innerHTML = '<i class="fa fa-resize"></i>';
    this.renderer.listen(this.child, 'mousedown', (event) => {
      event.preventDefault();
      this.mouseDown = true;
      this.windowStartingDimensionInfo = this.el.nativeElement.getBoundingClientRect();
      this.screenX = event.screenX;
      document.addEventListener('mousemove', this.handleResize);
      document.addEventListener('mouseup', this.removeTempListeners);
    });
    this.renderer.appendChild(el.nativeElement, this.child);

    this.handleResize = this.handleResize.bind(this);
    this.removeTempListeners = this.removeTempListeners.bind(this);
  }

  handleResize(event) {
    if (this.mouseDown) {
      const screenX = event.screenX;
      this.el.nativeElement.style.width = (screenX - this.windowStartingDimensionInfo.x) + 'px';
    }
  }

  removeTempListeners(e) {
    this.mouseDown = false;
    if (this.child) {
      document.removeEventListener('mousemove', this.handleResize);
      document.removeEventListener('mouseup', this.removeTempListeners);
    }
  }

}
