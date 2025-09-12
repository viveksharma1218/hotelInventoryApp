import { Routes } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { Employee } from './employee/employee';

export const routes: Routes = [
    {path:'rooms', component : Rooms},
    {path:'employee',  component:Employee},
    {path:'' , redirectTo:'/rooms' , pathMatch:'full'},
    
];
