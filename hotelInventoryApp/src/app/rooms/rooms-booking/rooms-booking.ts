import { Component,OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ReactiveFormsModule,FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'hinv-rooms-booking',
  imports: [JsonPipe,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './rooms-booking.html',
  styleUrl: './rooms-booking.scss'
})
export class RoomsBooking implements OnInit{
  id:number = 0;
  id$ : Observable<string | null>;
  bookingForm!:FormGroup;
  constructor(private route: ActivatedRoute,
    private formBuilder:FormBuilder,
  ){
    this.id$ = this.route.paramMap.pipe(
      map( params =>{return params.get('id')})
    )
  }

  ngOnInit(){
  //   this.route.params.subscribe((routeData)=>{
  //     this.id = routeData['id'];
  // })
  // this.id = this.route.snapshot.params['id'];
  // the form is created here now you can render on html file.
    this.bookingForm = this.formBuilder.group({
      // below are two method to create new form control, Syntax is different works same
        roomId: new FormControl(''),
        guestEmail:[],
        checkinDate:[],
        checkoutDate:[],
        bookingStatus:[],
        bookingAmount:[],
        bookingDate:[],
        mobileNumber:[],
        guestName:[],
        guestAddress:[],
        guestCity:[],
        guestState:[],
        guestCountry:[],
        guestZipCode:[],
        guestCount:[],

    });
  }
}

