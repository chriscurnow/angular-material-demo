import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { Material2AppAppComponent, DialogContentComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [Material2AppAppComponent, DialogContentComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [Material2AppAppComponent],
})
export class AppModule { }
