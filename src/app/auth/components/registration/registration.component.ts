import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm! : FormGroup;
  piecedIdentiteMsg = "Une photo de votre piece d'identité";
  constructor(
    private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.registrationForm.get("proprietaireCtrl")?.valueChanges.pipe(
      tap((val) => {
        if(val === "restaurant" || val === "comerçant"){this.piecedIdentiteMsg = "Charger les photos de la pièce d’identité du gérant"}
        else {this.piecedIdentiteMsg = "Une photo de votre piece d'identité"}
      })
    ).subscribe();
  }
  initRegistrationForm(){
    this.registrationForm = this.formBuilder.group({
      countryId: [Validators.required],
      phoneNumber: [null, Validators.required],
      proprietaireCtrl: [],
      password: [null, Validators.required],
      confirmPswd: [null, Validators.required]
    })
  }

  onSubmitForm() {
    this.authService.register({
            "phoneNumber": this.registrationForm.get("phoneNumber")?.value,
            "typeCompte": this.registrationForm.get("proprietaireCtrl")?.value,
            "password": this.registrationForm.get("password")?.value,
            "confirmPassword": this.registrationForm.get("confirmPswd")?.value,
    }).subscribe(d => this.router.navigateByUrl("signin"));
    
}
  goToLoginPage(){
    this.router.navigateByUrl("signin")
  }
  goToHome(){
    this.router.navigateByUrl("/")

  }
  displayElt(ev: any){
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          console.log(file)
        }
      });
    } 
    
  }
  dragOverHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }
}
