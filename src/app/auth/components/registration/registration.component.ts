import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordVoiceComponent } from 'src/app/record-voice/record-voice.component';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  countryFlag: {[code: number]: string}[] = []
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
    this.getCountry()
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
      locationCtrl: [null],
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
    formData.append("lastName", this.registrationForm.get("lastName")?.value),
    formData.append("location", this.registrationForm.get("locationCtrl")?.value)
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
