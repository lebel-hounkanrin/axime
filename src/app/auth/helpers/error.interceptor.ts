import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: any) => {
                if ([401, 403].includes(err.status) && this.authService.accessTokenValue){
                    this.authService.logout();
                }
                const error = (err && err.error && err.error.message) || err.statusText;
                return throwError(() => error);
            })
        )
    }
}