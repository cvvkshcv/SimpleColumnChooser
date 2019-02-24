import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleColumnChooserModule } from './column-chooser/simple-column-chooser.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { FilterArrayPipe } from './find-falcone/pipes/filter-array.pipe';
import { TabsComponent } from './tabs/tabs.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { TabComponent } from './tabs-component/tab/tab.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './game/score/score.component';
import { DropdownComponent } from './find-falcone/components/dropdown/dropdown.component';

const config: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'fining-falcone' , component: FindFalconeComponent},
  {path: 'tabs-comp' , component: TabsComponent},
  {path: 'contact-us' , component: ContactUsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    FindFalconeComponent,
    GameComponent,
    ScoreComponent,
    FilterArrayPipe,
    TabsComponent,
    TabsComponentComponent,
    TabComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleColumnChooserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
