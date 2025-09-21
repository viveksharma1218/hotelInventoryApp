import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../login/login-service';
import { inject } from '@angular/core';

export const roomGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  return loginService.isAdmin;
};
