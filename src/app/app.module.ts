import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
