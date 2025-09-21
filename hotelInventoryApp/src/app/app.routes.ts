import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Rooms } from './rooms/rooms';
import { Notfound } from './notfound/notfound';
import { RoomsBooking } from './rooms/rooms-booking/rooms-booking';
import { Newroom } from './rooms/newroom/newroom';
import { Login } from './login/login';
import { loginGuard } from './guards/login-guard';
import { roomGuard } from './rooms/guards/room-guard';

export const routes: Routes = [
    {   path:'rooms', 
        component :Rooms,
        canActivate:[loginGuard],
        canActivateChild:[roomGuard], 
        children:[
        //{path:':id', component:RoomsBooking}, //we are already inside rooms so we don't need room in path like before
        //{path:'add' , component:Newroom},
        // dynamic path must be at the end because it can match rooms/add to rooms/id
        {path:'add' , component:Newroom},
        {path:':id', component:RoomsBooking}
        ],
    },
    //lets create a dynamic path that will redirect to rooms-booking component.
    // we are saying dynamic because every time this path will have different room number
    //{path:'rooms/:id', component:RoomsBooking},
    {path:'employee',  component:Employee ,canActivate:[loginGuard]},
    // let's use lazy loading
    //{path:'newroom' , component:Newroom},
    {path:'newroom', 
        loadComponent:() => import('./rooms/newroom/newroom').then(m => m.Newroom)
        ,canActivate:[loginGuard]
    },
    {path:'login', component:Login},



    // below two paths must be at the end otherwise paths after these two won't work
    {path:'' , redirectTo:'/login' , pathMatch:'full'},
    //{path:'**' , component:Rooms},  // if path does not match user will be redirected to rooms  
    // or we can make a different component that informs user what is happening 
    {path:'**' , component:Notfound },
    
];
