import { Component } from '@angular/core';
import { RoomService } from '../rooms/room-service/rooms';
import { room } from '../rooms/room';

@Component({
  selector: 'hinv-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  providers:[RoomService], // this is to create separate instance of the RoomService 
})
export class Employee {
  empName:string = 'Jack Sparrow';
  constructor(RoomService:RoomService){}
}
