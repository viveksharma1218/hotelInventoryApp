import { Component, Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { roomList } from '../room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-room-list',
  imports: [CommonModule],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss'
})
export class RoomList implements OnChanges {
  // now rooms property can be used to send data
  @Input() rooms: roomList[] = [];
  @Output() selectedRoom = new EventEmitter<roomList>();
  @Input() title:string = '';
  
  selectRoom(data:roomList){
    this.selectedRoom.emit(data)
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if(changes['title']){
        this.title = changes['title'].currentValue.toUpperCase();
      }
  }
}
