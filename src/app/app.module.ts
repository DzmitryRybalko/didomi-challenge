import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material';


import { AppComponent } from './app.component';
import { GiveConsentComponent } from './give-consent/give-consent.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConsentsComponent } from './consents/consents.component';

import { ConsentService } from './services/consent/consent.service';
import { HttpConsentsInterceptor } from './core/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    GiveConsentComponent,
    ConsentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConsentsInterceptor, multi: true },
    ConsentService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
