import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserRegistrationInput } from './../models/user.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    private url = environment.baseApiUrl;
    private userSubject = new BehaviorSubject(null);
    constructor(private http : HttpClient){
        if(localStorage.getItem("accessToken") !== null){
            this.userSubject = new BehaviorSubject<any>(localStorage.getItem("accessToken"))   
        }
    }

    public get accessTokenValue(): any {
        return this.userSubject.value;
    }

    register(userInput: FormData){
        return this.http.post(`${this.url}/customers`, userInput)
    }

    login(userInput: any) {
        return this.http.post<any>(`${this.url}/auth/login`, userInput, { withCredentials: true })
            .pipe(map(res => {
                this.userSubject.next(res.user);
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
                localStorage.setItem("currentUser", JSON.stringify(res.user));

                //this.startRefreshTokenTimer();
                return res.user;
        }));
    }

    refreshToken() {
        const refreshToken = localStorage.getItem("refreshToken");
        console.log(refreshToken)
        return this.http.post<any>(`${this.url}/auth/refresh-token`, {refreshToken: refreshToken}, { withCredentials: true })
            .pipe(
                map((user) => {
                this.userSubject.next(user);
                //this.startRefreshTokenTimer();
                return user;
            })
            );
    }

    logout(){
        localStorage.clear()
    }

}   