import { Directive, ElementRef, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[columnChooser]',
  exportAs : 'columnChooser'
})
export class ColumnChooserDirective implements OnInit {
  public config : {name:string, required:boolean, hide: boolean, index:number}[] = [];
  private thead:any;
  private tbody:any;
  private theadRows: any;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.display = 'none';
    setTimeout(() => {
      this.validateForTableStructure();
      this.createTableConfig();
      this.el.nativeElement.style.display = '';
    }, 300);
  }

  private validateForTableStructure() {
    this.thead = this.el.nativeElement.querySelector('thead');
    this.tbody = this.el.nativeElement.querySelector('tbody');
    if(!this.thead) throw new Error('<thead> tag is required inside table');
    if(!this.tbody) throw new Error('<tbody> tag is required inside table');
    this.theadRows = this.thead.querySelectorAll('tr th');
  }

  createTableConfig() {
    this.theadRows.forEach((item, i) => {
      if(item.getAttribute('data-eliminate')) return;
      let tempconfig = {
        name : (item.getAttribute('data-title')) ? item.getAttribute('data-title') : item.innerText.trim(),
        required : !!item.getAttribute('data-required'),
        hide : !!item.getAttribute('data-hide'),
        index : i
      };
      if(tempconfig.hide) this.toggleColumn(i, false);
      this.config.push(tempconfig);
    });
  }

  toggleColumn(index:number, show:boolean) {
    let display = (show) ? 'table-cell' : 'none';
    this.theadRows[index].style.display = display;
    this.tbody.querySelectorAll('tr').forEach(item => {
      if(item.querySelectorAll('td')[index]) item.querySelectorAll('td')[index].style.display = display;
    });
  }
}