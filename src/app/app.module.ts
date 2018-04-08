import { BoatsService } from './Services/boats.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    BoatListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    BoatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
