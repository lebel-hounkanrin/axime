import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm! : FormGroup;
  piecedIdentiteMsg = "Une photo de votre piece d'identité";
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.registrationForm.get("proprietaireCtrl")?.valueChanges.pipe(
      tap((val) => {
        if(val === "restaurant" || val === "comerçant"){this.piecedIdentiteMsg = "Charger les photos de la pièce d’identité du gérant"}
        else {this.piecedIdentiteMsg = "Une photo de votre piece d'identité"}
      })
    ).subscribe()
  }
  initRegistrationForm(){
    this.registrationForm = this.formBuilder.group({
      proprietaireCtrl: ["null"]
    })
  }

  onSubmitForm() {
    console.log(this.registrationForm.value);
}
  goToLoginPage(){
    this.router.navigateByUrl("signin")
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
