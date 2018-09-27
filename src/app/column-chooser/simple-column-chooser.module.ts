import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnChooserDirective } from './column-chooser.directive';
import { ColumnChooserComponent } from './column-chooser.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    ColumnChooserDirective,
    ColumnChooserComponent
  ],
  declarations: [
    ColumnChooserDirective,
    ColumnChooserComponent
  ]
})
export class SimpleColumnChooserModule { }
