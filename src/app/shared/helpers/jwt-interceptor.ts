import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor( private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authService.accessTokenValue;
        const isLoggedIn = user?.jwtToken;
        const isApiUrl = req.url.startsWith(environment.baseApiUrl);
        if (isLoggedIn && isApiUrl) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
            });
        }

        return next.handle(req)
    }
}