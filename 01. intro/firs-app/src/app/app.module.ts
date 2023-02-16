import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { LalaComponent } from './lala/lala.component';
import { KalaComponent } from './kala/kala.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    LalaComponent,
    KalaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
