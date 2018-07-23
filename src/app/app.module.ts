import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import {APP_ROUTING} from './app.routes';

// servicios

 import { PublisherService } from './Services/Publisher.service';


// components

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/home/header/header.component';
import {BodyComponent} from './Components/home/body/body.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Components/home/home-page/home-page.component';
import { BodyLiteraturaComponent } from './Components/PageLiteratura/body-literatura/body-literatura.component';
import {PageOrganizationComponent} from './Components/PageOrganization/page-organization/page-organization.component';

import { ConsultasComponent } from './Components/PageOrganization/consultas/consultas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    BodyLiteraturaComponent,

    PageOrganizationComponent,
    ConsultasComponent,
    ],
  imports: [
    BrowserModule, APP_ROUTING
  ],
  providers: [
    PublisherService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
