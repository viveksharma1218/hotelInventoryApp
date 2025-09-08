import { InjectionToken } from "@angular/core";
import { appConfig } from "./appConfig.interface";
import { environment } from '../../environments/environment';


// this is value provide service
export const APP_CONFIG_SERVICE = new InjectionToken<appConfig>('valueprovideservice');

// this the value
export const APP_CONFIG:appConfig = {
    apiEndPoint:environment.apiEndPoint,
}