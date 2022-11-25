import { UserRegistrationInput } from './../models/user.models';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private url = "http://127.0.0.1:3000"
    constructor(private http : HttpClient){}

    register(userInput: any){
        console.log({
            "phoneNumber": userInput.phoneNumber,
            "typeCompte": userInput.typeCompte,
            "password": userInput.password,
            "confirmPassword": userInput.passwordConfirm
        })
        return this.http.post(`${this.url}/auth/register`, userInput)
    }

    login(userInput: any){
        return this.http.post(`${this.url}/auth/login`, userInput)
    }

}   