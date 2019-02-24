import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipePipe } from './pipes/reverse-pipe.pipe';
import { FlypanelComponent } from './components/flypanel/flypanel.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { ResizeTableColDirective } from './directives/resize-table-col.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReversePipePipe,
    FlypanelComponent,
    AlertBoxComponent,
    ResizeTableColDirective
  ],
  exports : [
    ReversePipePipe,
    FlypanelComponent,
    AlertBoxComponent,
    ResizeTableColDirective
  ]
})
export class SharedModule { }
