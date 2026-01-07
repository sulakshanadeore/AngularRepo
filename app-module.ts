import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Customer } from './customer/customer';
import { Products } from './products/products';
import { Students } from './students/students';

@NgModule({
  declarations: [
    App,
    Customer,
    Products,
    Students
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [Students]
})
export class AppModule { }
