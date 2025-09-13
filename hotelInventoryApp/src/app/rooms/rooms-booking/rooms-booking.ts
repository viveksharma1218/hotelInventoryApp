import { Component,OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.html',
  styleUrl: './rooms-booking.scss'
})
export class RoomsBooking implements OnInit{

  id:number = 0;
  id$ : Observable<string | null>;
  constructor(private route: ActivatedRoute){
    this.id$ = this.route.paramMap.pipe(
      map( params =>{return params.get('id')})
    )
  }

  ngOnInit(){
  //   this.route.params.subscribe((routeData)=>{
  //     this.id = routeData['id'];
  // })
  // this.id = this.route.snapshot.params['id'];
  }
}
