import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './Components/home/home-page/home-page.component';
import {BodyLiteraturaComponent} from './Components/PageLiteratura/body-literatura/body-literatura.component';
import {PageOrganizationComponent} from './Components/PageOrganization/page-organization/page-organization.component';


const APP_ROUTES: Routes = [
    {path: 'homePage', component: HomePageComponent },
    {path: 'literatura', component: BodyLiteraturaComponent },
    {path: 'organization', component: PageOrganizationComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


