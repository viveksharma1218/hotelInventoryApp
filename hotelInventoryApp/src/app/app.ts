import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  //template:`<h1>Hello world from inline template</h1>
  //<h2>to make multiline use tick otherwise single quote</h2>`,
  //styles:[`h1{color:red}`]  inline style
  styleUrl: './app.scss',
  
})
export class App {
  protected readonly title = signal('hotelInventoryApp');
  role = 'Admin';
}
