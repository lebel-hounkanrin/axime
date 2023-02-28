import { catchError, of, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

export function appInitializer(authService: AuthService){
    return () => authService.refreshToken().pipe(
        tap(() =>"success"),
        catchError((err) => {
            console.log("error => ", err)
            return of()
        })
    )
}