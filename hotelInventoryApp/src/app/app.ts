import { AfterViewInit,OnInit, Component, ElementRef, signal, ViewChild, ViewContainerRef,ChangeDetectorRef, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { Container } from './container/container';
import { Employee } from "./employee/employee";
import { Header } from "./header/header";
import { localStorageToken } from './localStorage.token';

@Component({
  selector: 'hinv-root',
  imports: [Rooms, Container, Employee, Header],
  templateUrl: './app.html',
  //template:`<h1>Hello world from inline template</h1>
  //<h2>to make multiline use tick otherwise single quote</h2>`,
  //styles:[`h1{color:red}`]  inline style
  styleUrl: './app.scss',
  
})
export class App  {
  protected readonly title = signal('hotelInventoryApp');
  role = 'Admin';
  //@ViewChild('user', { read: ViewContainerRef })
  //userContainer!: ViewContainerRef;
  //ngAfterViewInit(): void {
  //    const componentRef = this.userContainer.createComponent(Rooms)
  //}
  constructor(private cdr: ChangeDetectorRef, 
    @Inject(localStorageToken) private localStorage:Storage){}
  
    ngOnInit(){
      this.localStorage.setItem('hotelName' , 'hotelTaj')
    }
}
