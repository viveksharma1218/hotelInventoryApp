import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidator]',
  standalone:true,
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: Emailvalidator, 
    multi: true}]
})
export class Emailvalidator implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
      //bydefault type of value is any and we can not access predefined methods 
      // so we can tell the type of the value
      const value = control.value as string;
      if(value && value.includes('test')){
        return {
          invalidEmail:true,
        }
      }
      return null
  }
}
