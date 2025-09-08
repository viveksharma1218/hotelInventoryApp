import { InjectionToken, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { inject } from '@angular/core'; // Use the modern `inject` function


export const localStorageToken = new InjectionToken<any>('localStorage',{
    providedIn: 'root',
    factory(){
        const platformId = inject(PLATFORM_ID);
        // Check if the current platform is a browser
        if (isPlatformBrowser(platformId)) {
        return localStorage;
        }
        // If not in a browser (i.e., on the server), return a mock object
        return {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {}
        };
    }
})

// PLATFORM_ID: This token, when injected, 
// tells you which platform the application is running on (browser or server).

// isPlatformBrowser: This helper function takes the PLATFORM_ID and returns
//  true if the application is running in a browser.

// Conditional Logic: The if statement ensures that localStorage is only accessed 
// when the code is executed in a browser.

// Mock Object: When running on the server, 
// the factory returns a simple mock object with no-op (noop) methods. 
// This prevents the ReferenceError from being thrown, 
// allowing the server-side rendering to complete successfully. 
// Any code that tries to use localStorage during SSR will simply call 
// these empty methods without causing an error.