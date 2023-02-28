import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { hasFlag } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  countryFlag: {[code: number]: string}[] = []
  loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getCountry()
    this.initForm()
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      phoneNumber: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  onSubmitForm(){
    this.authService.login({
      phoneNumber: this.loginForm.get("phoneNumber")?.value,
      password: this.loginForm.get("password")?.value
    }).subscribe(data => {
      this.router.navigateByUrl("/");
    })
  }

  goToRegistrationPage(){
    this.router.navigateByUrl("signup")
  }
  goToHome(){
    this.router.navigateByUrl("/")

  }

  getCountry(){
    this.countryFlag.push({229: getUnicodeFlagIcon("BJ")})
    this.countryFlag.push({221: getUnicodeFlagIcon("SN")})
    this.countryFlag.push({225: getUnicodeFlagIcon("CI")})
    //this.countryFlag.push({227: getUnicodeFlagIcon("NE")})
    this.countryFlag.push({228: getUnicodeFlagIcon("TG")})
    this.countryFlag.push({234: getUnicodeFlagIcon("NG")})
    return this.countryFlag
  }

  getFlag(c: any){
    return `${Object.values(c)[0]}`
  }
}
