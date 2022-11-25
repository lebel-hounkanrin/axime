import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let token = this.authService.currentUserValue;
        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token["access_token"]}`
                }
            });
            console.log(token["access_token"])
        }

        return next.handle(request);
    }
}