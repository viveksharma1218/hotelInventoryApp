import { CanDeactivateFn } from '@angular/router';
import { RoomsBooking } from '../rooms-booking';


export const bookingGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  return component.bookingForm.pristine;
};
