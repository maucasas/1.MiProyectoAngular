import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './Components/home/homepage/homepage.component';
import {OrganizationComponent} from './Components/PageOrganization/organizacion/organization.component';
import { LiteraturaComponent } from './Components/literatura/literatura.component';
import { PublisherComponent } from './Components/PageOrganization/publisher/publisher.component';
import { GroupsComponent } from './Components/PageOrganization/groups/groups.component';
import { InformesComponent } from './Components/PageOrganization/informes/informes.component';
import { BusquedasComponent } from './Components/PageOrganization/busquedas/busquedas.component';
import { DatepickerViewsSelectionComponent } from './datepicker-views-selection/datepicker-views-selection.component';


const APP_ROUTES: Routes = [
    {path: 'homePage', component: HomePageComponent },
    {path: 'organization', component: OrganizationComponent },
    {path: 'literatura', component: LiteraturaComponent },
    {path: 'publisher/:cod', component: PublisherComponent },
    {path: 'groups/:id', component: GroupsComponent },
    {path: 'informes', component: InformesComponent },
    {path: 'busquedas/:word', component: BusquedasComponent },
    {path: 'date', component: DatepickerViewsSelectionComponent },

    {path: '**', pathMatch: 'full', redirectTo: 'homePage'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


