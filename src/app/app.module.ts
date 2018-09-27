import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleColumnChooserModule } from './column-chooser/simple-column-chooser.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleColumnChooserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
