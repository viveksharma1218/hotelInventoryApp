import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_CONFIG_SERVICE,APP_CONFIG } from './appConfig/appConfig.service';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpinterceptorInterceptor } from './httpinterceptor-interceptor';
import { InitServ } from './init-serv';

// const appInitializer = ()=>{
//   const configService = inject(InitServ);
//   return configService.init();
// }


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    {
          provide: APP_CONFIG_SERVICE,
          useValue: APP_CONFIG
    },
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([httpinterceptorInterceptor]),
      //withFetch()
    ),
    // InitServ,
    // provideAppInitializer(appInitializer),
  ]
};
