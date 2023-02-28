import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let accessTokenValue = this.authService.accessTokenValue.accessToken;
        console.log("accessToken", accessTokenValue)
        if (accessTokenValue) {
            request = request.clone({
                
                setHeaders: { 
                    Authorization: `Bearer ${accessTokenValue}`
                }
            });
        }

        return next.handle(request);
    }
}