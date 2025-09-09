import { Inject, Injectable } from '@angular/core';
import { roomList, room } from '../room';
import { environment } from '../../../environments/environment';
import{APP_CONFIG_SERVICE} from '../../appConfig/appConfig.service';
import { appConfig } from '../../appConfig/appConfig.interface';
import { HttpClient,HttpRequest } from '@angular/common/http';
import { Rooms } from '../rooms';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomList : roomList[]= [];
    constructor(@Inject(APP_CONFIG_SERVICE) private config:any,
   private http : HttpClient){
      // this will help us to know how many instance are created of this service
      console.log('room service initialized');
      console.log(environment.apiEndPoint);
    }
    getRooms(){
      //return this.roomList; this was using default data now we bring data from API
      // we are not using prefix of the address (localhost:3000) because we have already saved that 
      // we are also giving data type meaning data we are receiving must be of this type
      return this.http.get<roomList[]>('/api/rooms');
      
    }
    addRoom(room:roomList){
      // datatype is an Array here because this API is returning all data usually only new data returns
      return this.http.post<roomList[]>('/api/rooms', room)
    }

    editRoom(room:roomList){
      return this.http.put<roomList[]>(`/api/rooms/${room.roomNumber}`,room);
    }
    deleteRoom(id:string){
      return this.http.delete<roomList[]>(`/api/rooms/${id}`);
    }
    // creating http request. we are using json placeholder api for photos that has 5000 records
    getPhotos(){
      const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',
        {
          reportProgress:true,
        }
      );
      return this.http.request(request);
    }
    
}
