import { Component } from '@angular/core';
import { room, roomList } from './room';
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule],
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
  rooms:room | undefined | null= {
    //totalRooms : 500,
    availableRooms :100,
    //bookedRooms : 10,
  }
  RoomList:roomList[] = [{
    roomNumber:1,
    roomType : 'Private',
    amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
    price : 10000,
    checkInTime : new Date(11-11-2020),
    checkOutTime : new Date(12-12-2020)
  },
  {
    roomNumber:2,
    roomType : 'Deluxe',
    amenities : 'AC , Wifi , Free Breakfast, Free Lunch',
    price : 5000,
    checkInTime : new Date(11-11-2020),
    checkOutTime : new Date(12-12-2020)
  },
  {
    roomNumber:3,
    roomType : 'Standard',
    amenities : 'AC , Wifi , Free Breakfast',
    price : 2000,
    checkInTime : new Date(11-11-2020),
    checkOutTime : new Date(12-12-2020)
  }]
}
