import { AbstractControl, FormGroup } from "@angular/forms";


export class customValidator{

    static validateName(control:AbstractControl){

        const  value = control.value as string;
        if(value.includes('test')){
            return{
                invalidName:true,
            }
        }
        return null; // means no error
    }

    static validateSpecialCharacter(char:string){
        return (control:AbstractControl)=>{
            const value = control.value as string;
            if(value.includes(char)){
                return{
                    invalidChar:true,
                }
            }
            return null;
        }
    }

    static validateDate(control:FormGroup){

        const checkInDate = control.get('checkinDate')?.value;
        const checkOutDate = control.get('checkoutDate')?.value;

        // Convert dates to a comparable format (timestamps)
        const checkinTime = new Date(checkInDate).getTime();
        const checkoutTime = new Date(checkOutDate).getTime();
        if(checkinTime >= checkoutTime){
            // this error is available on formGroup if we want to seton control
            // control.get('checkoutDate')?.setErrors({
            //     invalidDate:true,
            // })
            // this error is available on formGroup
            return{
                invalidDate:true,
            }
        }
        return null;
    }
}