import { ErrorHandler } from "@angular/core";
import { error } from "console";

export class globalErrorHandler implements ErrorHandler{
    handleError(error: any): void{
        console.log(error);
    }
}