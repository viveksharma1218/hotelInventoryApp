import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { roomList } from '../room';
import { JsonPipe, NgIf } from '@angular/common';
import { RoomService } from '../room-service/rooms';

@Component({
  selector: 'hinv-newroom',
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './newroom.html',
  styleUrl: './newroom.scss'
})
export class Newroom {
  successMessage:string = '' ;

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

  addRoom(roomForm:NgForm){
    this.roomservice.addRoom(this.room).subscribe(
      (data)=>{console.log(data)
        this.successMessage = 'room added successfully';
        roomForm.reset();
        // we can give defalut data also with reset
        // roomForm.reset({
        //   roomNumber: '',
        //     roomType:'luxury',
        //     amenities:'all',
        //     price: 10000 ,
        //     checkInTime: new Date() ,
        //     checkOutTime: new Date(),
        //     rating:5,
        // });
      }
    )
  }

}
