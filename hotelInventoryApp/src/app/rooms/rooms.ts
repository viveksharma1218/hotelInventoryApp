import { Component,OnInit,ChangeDetectionStrategy, DoCheck, ViewChild,ViewChildren, AfterViewInit,
  ChangeDetectorRef, QueryList, 
  OnDestroy} from '@angular/core';
import { room, roomList } from './room';
import { CommonModule, NgIf } from "@angular/common";
import { RoomList } from "./room-list/room-list";
import { Header } from '../header/header';
import { RoomService } from './room-service/rooms';
import { catchError, Observable,of,Subject,Subscription,map} from 'rxjs';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, RoomList,Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class Rooms implements OnInit , DoCheck, AfterViewInit,OnDestroy{
  hotelname:string = 'Taj Hotel';
  numberOfRooms:number = 50;
  public hideRooms:boolean = true;
  Title:string = 'Room List(old title)';
  yourRoom:roomList | undefined;
  totalBytes :number = 0;
  subscription!:Subscription;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  roomCount$ ;
  // we will initialize this in constructor
  rooms$;
  stream  = new Observable ((observer)=>{
    observer.next ('data1');
    observer.next('data2');
    observer.next('data3');
    observer.next('data4');
    observer.complete();
  });
  // new viewChild() syntax using as signal query
  //headerRef = viewChild(Header);   //when you use this headerRef use as a function- this.headerRef()
  constructor(private cdr: ChangeDetectorRef, private roomService:RoomService){
    this.rooms$ = this.roomService.getRooms$.pipe(
      catchError((err)=>{
        //console.log(err);
        this.error$.next(err.message);
        return of([]);
      })
    );
    this.roomCount$ = this.roomService.getRooms$.pipe(
    map((roomData)=>{
      return roomData.length
    })
  )
  }
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
    // lets made httprequest with ngOnInit
    //this.roomService.getRooms().subscribe(rooms => {
    // rather than using getRooms method we will use getRooms$ property that have shareReplay applied
    
    // we are commenting below line because now we will use async pipe of angular instead of rxjs subscribe method
    // async can manage subscribe and unsubscribe(we component will destroy) 
    // this.roomService.getRooms$.subscribe(rooms => {
    //     this.RoomList = rooms;
    // });
    // saved inside rxjs subscription type so rxjs knows about subscription
      this.subscription = this.stream.subscribe((data)=>{
        console.log(data);
      });
      this.stream.subscribe({
        next:(value)=>{console.log(value)},
        complete:() => {console.log('stream ended')},
        error:(err)=>{console.log(err)},
      });
    
    
  };
  selectRoom(data:roomList){
    console.log(data);
    this.yourRoom = data;
  }

  addRoom(){
    const room : roomList = {
      roomNumber:'4',
      roomType : 'Private',
      amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
      price : 2500,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:3.5324234
    };
    //this.RoomList.push(room); // works before change detection strategy on push
    //this.RoomList = [...this.RoomList,room]; // not modifying creating new Array Using old and new data.
    // lets do put request
    this.roomService.addRoom(room).subscribe((data)=>{
      this.RoomList = data;
    });
  }
  editRoom(){
    const  room:roomList={
      roomNumber:'3',
      roomType : 'Private',
      amenities : 'AC , Wifi , Free Breakfast, Free lunch, Free Dinner',
      price : 33333,
      checkInTime : new Date('11-11-2024'),
      checkOutTime : new Date('11-11-2024'),
      rating:3.5324234
    }
    this.roomService.editRoom(room).subscribe((data)=>{
      this.RoomList = data;
    });
  }
  deleteRoom(){
    const id = '2';
    this.roomService.deleteRoom(id).subscribe((data)=>{
    // delete API does not return anything but this is a dummy API so we have whole list of room
      this.RoomList = data;
    })
  }
  getPhotos(){
    this.roomService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{
          console.log('httpRequest sent');
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('request seccuss');
          break;
        }
        case HttpEventType.DownloadProgress:{
          //we are not using event.total because till whole data is downloded this will be undefined
          // loaded will update step by step 
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response:{
          // try other event. also 
          console.log(event.body);
          break;
        }
      }
    })
  }
  ngDoCheck(): void {
      console.log('this is ngDoCheck')
  }
  @ViewChild(Header) headerComponent!: Header;
  @ViewChildren(Header) headerChildrenComponent! : QueryList<Header>;
  ngAfterViewInit(): void {
      //const headerComponent = this.headerRef();  // Use headerRef as a Method;
      this.headerComponent.title = 'this is new title';
      console.log(this.headerComponent); 
      console.log(this.headerChildrenComponent);
      // ViewChildren has access to all instances with last property we are changing title of last instance
      this.headerChildrenComponent.last.title = 'last title'; 
      //headerComponent!.title = 'this is new title';
      // we will manually start change detection for child component to update to title property
      this.cdr.detectChanges()
      
      // Force change detection for the specific component
      //headerComponent.changeDetectorRef.detectChanges();
      //this.headerComponent.changeDetectorRef.detectChanges();
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe(); 
  }
  
}