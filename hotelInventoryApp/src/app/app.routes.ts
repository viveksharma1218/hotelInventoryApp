import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Rooms } from './rooms/rooms';
import { Notfound } from './notfound/notfound';
import { RoomsBooking } from './rooms/rooms-booking/rooms-booking';
import { Newroom } from './rooms/newroom/newroom';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'rooms', component :Rooms},
    //lets create a dynamic path that will redirect to rooms-booking component.
    // we are saying dynamic because every time this path will have different room number
    {path:'rooms/:id', component:RoomsBooking},
    {path:'employee',  component:Employee},
    {path:'newroom' , component:Newroom},
    {path:'login', component:Login},



    // below two paths must be at the end otherwise paths after these two won't work
    {path:'' , redirectTo:'/login' , pathMatch:'full'},
    //{path:'**' , component:Rooms},  // if path does not match user will be redirected to rooms  
    // or we can make a different component that informs user what is happening 
    {path:'**' , component:Notfound , pathMatch:'prefix'},
    
];
