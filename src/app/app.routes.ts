import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './Components/home/homepage/homepage.component';
import {OrganizationComponent} from './Components/PageOrganization/organizacion/organization.component';
import { LiteraturaComponent } from './Components/literatura/literatura.component';
import { PublisherComponent } from './Components/PageOrganization/publisher/publisher.component';
import { GroupsComponent } from './Components/PageOrganization/groups/groups.component';


const APP_ROUTES: Routes = [
    {path: 'homePage', component: HomePageComponent },
    {path: 'organization', component: OrganizationComponent },
    {path: 'literatura', component: LiteraturaComponent },
    {path: 'publisher/:id', component: PublisherComponent },
    {path: 'groups/:id', component: GroupsComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


