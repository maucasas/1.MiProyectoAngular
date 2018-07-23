import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './Components/home/home-page/home-page.component';
import {BodyLiteraturaComponent} from './Components/PageLiteratura/body-literatura/body-literatura.component';
import {PageOrganizationComponent} from './Components/PageOrganization/page-organization/page-organization.component';
<<<<<<< HEAD

const APP_ROUTES: Routes = [
    {path: 'homePage', component: HomePageComponent },
    {path: 'literatura', component: BodyLiteraturaComponent },
    {path: 'organization', component: PageOrganizationComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];
=======
import { ConsultasComponent } from './Components/PageOrganization/consultas/consultas.component';

>>>>>>> e4c5b63921268c09129972c717227d0768274709

const APP_ROUTES: Routes = [
    {path: 'homePage', component: HomePageComponent },
    {path: 'consultas', component: ConsultasComponent },
    {path: 'literatura', component: BodyLiteraturaComponent },
    {path: 'organization', component: PageOrganizationComponent },
    {path: 'consultas', component: ConsultasComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


