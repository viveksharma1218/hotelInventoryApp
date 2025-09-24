import { Component,OnInit, signal, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ReactiveFormsModule,FormGroup,FormBuilder,FormControl, FormArray, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatExpansionModule, NgFor,
    MatCheckboxModule],
  templateUrl: './rooms-booking.html',
  styleUrl: './rooms-booking.scss'
})
export class RoomsBooking implements OnInit{
  id:number = 0;
  id$ : Observable<string | null>;
  bookingForm!:FormGroup;
  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }
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
        roomId: new FormControl({value:'2',disabled:true}),
        guestEmail:['', [Validators.required,Validators.email]],
        checkinDate:[''],
        checkoutDate:[''],
        bookingStatus:[''],
        bookingAmount:[''],
        bookingDate:[''],
        mobileNumber:['',[Validators.required,Validators.pattern('^\\d{10}$')]],
        guestName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        guestAddress: this.formBuilder.group({
          AddressLine1:['',[Validators.required]],
          AddressLine2:[''],
          City:[''],
          State:[''],
          Country:[''],
          ZipCode:[''],
        }),
        
        guests:this.formBuilder.array([this.formBuilder.group({
          guestName:['',[Validators.required]],
          guestAge:['']
        })]),
        tnc: new FormControl(false,{validators:[Validators.requiredTrue]})

    });
  }
  formSubmit(){
    console.log(this.bookingForm.value);
    // .value does not get disabled value here roomId
    console.log(this.bookingForm.getRawValue())
  }
  addGuest(){
    this.guests.push(
      this.formBuilder.group({
          guestName:[''],
          guestAge:['']
      })
    )
  }
  removeGuest(i:number){
    this.guests.removeAt(i)
  }
  addPassport(){
    this.bookingForm.addControl('passportNo' , new FormControl(''));
  }
  removePassport(){
    this.bookingForm.removeControl('passportNo')
  }
  resetForm(){
    this.bookingForm.reset({
      roomId: '2',
        guestEmail:'',
        checkinDate:'',
        checkoutDate:'',
        bookingStatus:'',
        bookingAmount:'',
        bookingDate:'',
        mobileNumber:'',
        guestName:'',
        guestAddress: this.formBuilder.group({
          AddressLine1:'',
          AddressLine2:'',
          City:'',
          State:'',
          Country:'',
          ZipCode:'',
        }),
        
        guests:this.formBuilder.array([this.formBuilder.group({
          guestName:'',
          guestAge:'',
        })]),
        tnc: false
    })
  }
}

