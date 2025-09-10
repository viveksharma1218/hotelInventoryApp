import { HttpInterceptorFn } from '@angular/common/http';

export const httpinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenData = '121212121212121212';
  const newRequest = req.clone({
    setHeaders:{
      token : `vivek ${tokenData}`,
    }
  }) 
  console.log(newRequest);
  return next(newRequest);
};
 