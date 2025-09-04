import { Component, Input, input } from '@angular/core';
import { roomList } from '../room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-room-list',
  imports: [CommonModule],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss'
})
export class RoomList {
  // now rooms property can be used to send data
  @Input() rooms: roomList[] = [];
}
