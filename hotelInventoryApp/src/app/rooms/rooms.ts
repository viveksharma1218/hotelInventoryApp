import { Component,OnInit,ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { room, roomList } from './room';
import { CommonModule, NgIf } from "@angular/common";
import { RoomList } from "./room-list/room-list";

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomList],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class Rooms implements OnInit , DoCheck{
  hotelname:string = 'Taj Hotel';
  numberOfRooms:number = 50;
  public hideRooms:boolean = false;
  Title:string = 'Room List(old title)';
  yourRoom:roomList | undefined;
  constructor(){}
  toggle(){
    this.hideRooms = !this.hideRooms;
    this.Title = 'Room List (new title)';
    
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

  addRoom(){
    const room : roomList = {
      roomNumber:4,
      roomType : 'Private',
      amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
      price : 2500,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:3.5324234
    };
    //this.RoomList.push(room); // works before change detection strategy on push
    this.RoomList = [...this.RoomList,room]; // not modifying creating new Array Using old and new data.
  }
  ngDoCheck(): void {
      console.log('this is ngDoCheck')
  }
}