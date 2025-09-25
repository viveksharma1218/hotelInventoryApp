import { Component,OnInit, signal, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, map, mergeMap, Observable, switchMap } from 'rxjs';
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
import { BookingServ } from './booking-serv';
import { customValidator } from './Validators/custom-validator/custom-validator';

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
    private formBuilder:FormBuilder, private bookingService:BookingServ,
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
        //guestEmail:['', [Validators.required,Validators.email]],
        //updateOn will listen to value change when we move away from form control
        guestEmail:['',{
          //updateOn:'blur', 
          validators:[Validators.required,Validators.email]
        }],
        // updateOn:'blur' will help customvalidator.validdate
        checkinDate:['',{updateOn:'blur',}],
        checkoutDate:['',{updateOn:'blur',}],
        bookingStatus:[''],
        bookingAmount:[''],
        bookingDate:[''],
        mobileNumber:['',[Validators.required,Validators.pattern('^\\d{10}$')]],
        guestName:['',
          [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          customValidator.validateName,
          customValidator.validateSpecialCharacter('#'),]],
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

    },{validators:customValidator.validateDate}
    // this will apply updateOn on every form control
    //{updateOn:'blur'}
  );
    this.sendDefaultData()
    // we can listen to value changes by this 
    //  below we wil apply different method to listen to value change
    // by default this is listening to every keypress on formControl
    // this.bookingForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // })
    // lets use mergemap, switchmap and exhaustmap
    this.bookingForm.valueChanges.pipe(
      //mergeMap((data)=>{
      //switchMap((data)=>{
        exhaustMap((data)=>{  
        return this.bookingService.bookRoom(data)
      })
    ).subscribe((data)=>{console.log(data)});
  }
  formSubmit(){
    console.log(this.bookingForm.value);
    // .value does not get disabled value here roomId
    console.log(this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{
    //   console.log(data);
    // })
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
  sendDefaultData(){
    //this.bookingForm.setValue({
    // setvalue will show error because it require all values 
    this.bookingForm.patchValue({
        roomId: '2',
        guestEmail:'user@gmail.com',
        checkinDate:'',
        checkoutDate:'',
        //bookingStatus:'', to  make error for set value because it needs all unlike patch
        bookingAmount:'',
        bookingDate:'',
        mobileNumber:'1212121212',
        guestName:'user',
        guestAddress: {
          AddressLine1:'userHome',
          AddressLine2:'',
          City:'',
          State:'',
          Country:'',
          ZipCode:'',
        },
        guests:[],
        tnc: false
    })
  }
}

