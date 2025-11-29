import { Routes } from '@angular/router';
import { BusinessComponent } from './businesscard/business/business';
import { Display } from './cvTech/display/display';
import { ChangeColorComponent } from './change-color/change-color';
import { USER_ROUTES } from './user/user.routes';

export const routes: Routes = [
    {path: '', component:ChangeColorComponent },
    {path: 'card', component: BusinessComponent},
    ...USER_ROUTES

];
