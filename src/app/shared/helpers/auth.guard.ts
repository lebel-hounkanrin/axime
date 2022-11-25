import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        const currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser)
        if (currentUser) {
            return true
        }
        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}