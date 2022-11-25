import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
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
}
