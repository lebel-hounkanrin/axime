import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordVoiceComponent } from 'src/app/record-voice/record-voice.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm! : FormGroup;
  showUserName : boolean =false;
  showSocityName : boolean = false;
  piecedIdentiteMsg = "Une photo de votre piece d'identité";
  userLocalisation!: Blob;
  passwordCtrl = new FormControl()
  constructor(
    private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService, private http : HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.registrationForm.get("proprietaireCtrl")?.valueChanges.pipe(
      tap((val) => {
        if(val === "restaurant" || val === "comerçant"){
          this.showUserName = false;
          this.showSocityName = true;
          //this.piecedIdentiteMsg = "Charger les photos de la pièce d’identité du gérant"
        }
        else {
          this.showUserName = true;
          this.showSocityName = false;
          //this.piecedIdentiteMsg = "Une photo de votre piece d'identité"
        }
      })
    ).subscribe();
  }
  initRegistrationForm(){
    this.registrationForm = this.formBuilder.group({
      countryId: [Validators.required],
      phoneNumber: [null, Validators.required],
      proprietaireCtrl: [],
      password: this.passwordCtrl,
      confirmPswd: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null],
    })
  }

  onSubmitForm() {
    const formData = new FormData();
    //formData.append("userLocalisation", this.userLocalisation, "userLocalisation")
    formData.append("phoneNumber", this.registrationForm.get("phoneNumber")?.value)
    formData.append("typeCompte", this.registrationForm.get("proprietaireCtrl")?.value)
    formData.append("password", this.registrationForm.get("password")?.value)
    formData.append("confirmPassword", this.registrationForm.get("confirmPswd")?.value)
    formData.append("firstName", this.registrationForm.get("firstName")?.value),
    formData.append("lastName", this.registrationForm.get("lastName")?.value)
    console.log(formData)
    this.authService.register(formData).subscribe(d => this.router.navigateByUrl("signin"));
    
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

  startRecording(){
    const recordModal = this.modalService.open(RecordVoiceComponent, {centered: true});
    recordModal.componentInstance.endOfRecording.subscribe((blob: any) => {
      this.userLocalisation = new Blob([blob], {type: "audio/webm;codecs=opus"});;
      /*let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = (() => {
        console.log(reader.result)
      })
      */
    })
}
}
