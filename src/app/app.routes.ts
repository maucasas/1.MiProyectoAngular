import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './Components/home/home-page/home-page.component'

const APP_ROUTES:Routes=[
    {path:'homePage', component:HomePageComponent },
    {path:'**', pathMatch:'full', redirectTo:'hom'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

