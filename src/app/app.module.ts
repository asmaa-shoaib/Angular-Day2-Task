import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Home/header/header.component';
import { FooterComponent } from './Components/Home/footer/footer.component';
import { ContentComponent } from './Components/Home/content/content.component';
import { SliderComponent } from './Components/Home/slider/slider.component';
import { Day2Component } from './Components/day2/day2.component';
import { FormsModule } from '@angular/forms';
import { Day2TaskComponent } from './Components/day2-task/day2-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SliderComponent,
    Day2Component,
    Day2TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
