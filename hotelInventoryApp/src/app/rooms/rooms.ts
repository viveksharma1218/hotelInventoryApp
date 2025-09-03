import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {
  hotelname:string = 'Taj Hotel';
  numberOfRooms:number = 50;
  hideRooms:boolean = true;
  constructor(){}
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
