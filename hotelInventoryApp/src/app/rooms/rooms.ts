import { Component,OnInit } from '@angular/core';
import { room, roomList } from './room';
import { CommonModule, NgIf } from "@angular/common";
import { RoomList } from "./room-list/room-list";

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms implements OnInit {
  hotelname:string = 'Taj Hotel';
  numberOfRooms:number = 50;
  public hideRooms:boolean = false;
  
  yourRoom:roomList | undefined;
  constructor(){}
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  rooms:room | undefined | null= {
    //totalRooms : 500,
    availableRooms :100,
    //bookedRooms : 10,
  }
  RoomList:roomList[] = []
  ngOnInit () :void{
    this.RoomList= [{
    roomNumber:1,
    roomType : 'Private',
    amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
    price : 10000,
    checkInTime : new Date('11-11-2024'),
    checkOutTime : new Date('11-11-2024'),
    rating:4.5324234
  },
  {
    roomNumber:2,
    roomType : 'Deluxe',
    amenities : 'AC , Wifi , Free Breakfast, Free Lunch',
    price : 5000,
    checkInTime : new Date('11-11-2024'),
    checkOutTime : new Date('11-11-2024'),
    rating:4.334234234
  },
  {
    roomNumber:3,
    roomType : 'Standard',
    amenities : 'AC , Wifi , Free Breakfast',
    price : 2000,
    checkInTime : new Date('11-11-2024'),
    checkOutTime : new Date('11-11-2024'),
    rating:4.2234234
  }]
  }
  selectRoom(data:roomList){
    console.log(data);
    this.yourRoom = data;
  }
}