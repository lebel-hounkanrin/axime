import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserRegistrationInput } from './../models/user.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    private url = environment.baseApiUrl;
    private accessTokenSubject = new BehaviorSubject(null);
    constructor(private http : HttpClient){
        if(localStorage.getItem("accessToken") !== null){
            this.accessTokenSubject = new BehaviorSubject<any>(localStorage.getItem("accessToken"))   
        }
    }

    public get accessTokenValue(): any {
        return this.accessTokenSubject.value;
    }

    register(userInput: FormData){
        return this.http.post(`${this.url}/customers`, userInput)
    }

    login(userInput: any): Observable<any>{
        return this.http.post<any>(`${this.url}/auth/login`, userInput).pipe(
            map(userInfo => {
                localStorage.setItem("accessToken", userInfo["accessToken"]);
                this.accessTokenSubject.next(userInfo);
            })
        )
    }

    logout(){
        localStorage.clear()
    }

}   