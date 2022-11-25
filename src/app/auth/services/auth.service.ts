import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserRegistrationInput } from './../models/user.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private url = "http://127.0.0.1:3000";
    private currentUserSubject!: BehaviorSubject<any>;
    public currentUser!: Observable<any>;
    constructor(private http : HttpClient){
        //this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem("access_token"));
        localStorage.getItem("access_token") !== null ? this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem("access_token"))
        : this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem("access_token"))
        this.currentUser = this.currentUserSubject.asObservable()
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    register(userInput: any){
        return this.http.post(`${this.url}/auth/register`, userInput)
    }

    login(userInput: any): Observable<any>{
        return this.http.post<any>(`${this.url}/auth/login`, userInput).pipe(
            map(userInfo => {
                localStorage.setItem("token", userInfo["access_token"]);
                this.currentUserSubject.next(userInfo);
            })
        )
    }

}   