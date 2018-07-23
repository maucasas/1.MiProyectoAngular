import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import {APP_ROUTING} from './app.routes';

// servicios


// components

import { AppComponent } from './app.component';
import { Headercomponent } from './Components/home/header/header.component';
import {BodyComponent} from './Components/home/body/body.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Components/home/home-page/home-page.component';
import { BodyLiteraturaComponent } from './Components/PageLiteratura/body-literatura/body-literatura.component';
import {PageOrganizationComponent} from './Components/PageOrganization/page-organization/page-organization.component';


@NgModule({
  declarations: [
    AppComponent,
    Headercomponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    BodyLiteraturaComponent,
    PageOrganizationComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
