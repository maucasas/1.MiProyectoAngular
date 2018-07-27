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
import { HomePageComponent } from './Components/home/homepage/homepage.component';
import { OrganizationComponent } from './Components/PageOrganization/organizacion/organization.component';
import { LiteraturaComponent } from './Components/literatura/literatura.component';
import { PublisherComponent } from './Components/PageOrganization/publisher/publisher.component';
import { GroupsComponent } from './Components/PageOrganization/groups/groups.component';
import { InformesComponent } from './Components/PageOrganization/informes/informes.component';
import { BusquedasComponent } from './Components/PageOrganization/busquedas/busquedas.component';
import { CardPublisherComponent } from './Components/PageOrganization/card-publisher/card-publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    OrganizationComponent,
    LiteraturaComponent,
    PublisherComponent,
    GroupsComponent,
    InformesComponent,
    BusquedasComponent,
    CardPublisherComponent
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
