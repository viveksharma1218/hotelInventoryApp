import { AfterViewInit,OnInit, Component, ElementRef, signal, ViewChild, 
  ChangeDetectorRef, Inject } from '@angular/core';
import { localStorageToken } from './localStorage.token';
import { InitServ } from './init-serv';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';

@Component({
  selector: 'hinv-root',
  imports:[NavsidebarComponent],
  templateUrl: './app.html',
  //template:`<h1>Hello world from inline template</h1>
  //<h2>to make multiline use tick otherwise single quote</h2>`,
  //styles:[`h1{color:red}`]  inline style
  styleUrl: './app.scss',
  
})
export class App  {
  protected readonly title = signal('hotelInventoryApp');
  role = 'Admin';
  //config:any;
  //@ViewChild('user', { read: ViewContainerRef })
  //userContainer!: ViewContainerRef;
  //ngAfterViewInit(): void {
  //    const componentRef = this.userContainer.createComponent(Rooms)
  //}
  constructor(private cdr: ChangeDetectorRef, 
    @Inject(localStorageToken) private localStorage:Storage,
  private InitServ:InitServ){}
  
    ngOnInit(){
      this.localStorage.setItem('hotelName' , 'hotelTaj');
      //this.config = this.InitServ.getConfig();
    }
}
