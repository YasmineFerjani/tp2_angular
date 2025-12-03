import { Routes } from '@angular/router';
import { BusinessComponent } from './businesscard/business/business';
import { Display } from './cvTech/display/display';
import { ChangeColorComponent } from './change-color/change-color';
import { Form } from './form/form';
import { USER_ROUTES } from './user/user.routes';
import { ImageSlider } from './image-slider/image-slider';

export const routes: Routes = [
    { path: '', component: ChangeColorComponent },
    { path: 'card', component: BusinessComponent },
    { path: 'login', component: Form },
    { path: 'stream', component: ImageSlider },
    ...USER_ROUTES

];
