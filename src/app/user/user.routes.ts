import { CvDetails } from "../cvTech/cv-details/cv-details";
import { Display } from "../cvTech/display/display";

export const USER_ROUTES = [
    {path: 'cv', children: [
        {path:'', component: Display}, 
        {path: ':id', component: CvDetails}
    ] }
]