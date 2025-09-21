import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
 // return false;
 const logInService = inject(LoginService);
 const router = inject(Router);
 // if after login we refresh we will back to login page.
 return logInService.isLoggedIn? true : router.navigate(['/login'])
};
