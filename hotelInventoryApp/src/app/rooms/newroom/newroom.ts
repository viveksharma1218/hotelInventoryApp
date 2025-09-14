import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { roomList } from '../room';
import { NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RoomService } from '../room-service/rooms';

@Component({
  selector: 'hinv-newroom',
  imports: [FormsModule,JsonPipe],
  templateUrl: './newroom.html',
  styleUrl: './newroom.scss'
})
export class Newroom {
  successMessage:string = 'room added successfully' ;

  room:roomList = {
    roomNumber: '',
    roomType:'',
    amenities:'',
    price: 0 ,
    checkInTime: new Date() ,
    checkOutTime: new Date(),
    rating:3,
  }
  constructor( private roomservice:RoomService){}

  addRoom(){
    this.roomservice.addRoom(this.room).subscribe(
      (data)=>{console.log(data)}
    )
  }

}
