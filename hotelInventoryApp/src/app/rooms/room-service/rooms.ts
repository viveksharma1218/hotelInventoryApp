import { Inject, Injectable } from '@angular/core';
import { roomList } from '../room';
import { environment } from '../../../environments/environment';
import{APP_CONFIG_SERVICE} from '../../appConfig/appConfig.service';
import { appConfig } from '../../appConfig/appConfig.interface';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomList : roomList[]= [{
      roomNumber:'1',
      roomType : 'Private',
      amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
      price : 10000,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:4.5324234
    },
    {
      roomNumber:'2',
      roomType : 'Deluxe',
      amenities : 'AC , Wifi , Free Breakfast, Free Lunch',
      price : 5000,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:4.334234234
    },
    {
      roomNumber:'3',
      roomType : 'Standard',
      amenities : 'AC , Wifi , Free Breakfast',
      price : 2000,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:4.2234234
    }];
    constructor(@Inject(APP_CONFIG_SERVICE) private config:any ){
      // this will help us to know how many instance are created of this service
      console.log('room service initialized');
      console.log(environment.apiEndPoint);
    }
    getRooms(){
      return this.roomList;
      
    }
}
