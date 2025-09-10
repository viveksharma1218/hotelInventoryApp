import { Component, Input,Output,EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { roomList } from '../room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-room-list',
  imports: [CommonModule],
  templateUrl: './room-list.html',
  styleUrl: './room-list.scss'
})
export class RoomList implements OnChanges, OnDestroy {
  // now rooms property can be used to send data
  @Input() rooms: roomList[] | null= [];  // null datatype because async can pass null also
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
  ngOnDestroy(): void {
      console.log('On Destroy is called');
  }
}
