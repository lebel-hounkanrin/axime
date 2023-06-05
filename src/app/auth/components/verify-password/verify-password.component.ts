import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.css']
})
export class VerifyPasswordComponent implements OnInit, OnChanges {
  @Input() password!: string;
  initValue = "";
  constainsCapitalLetter = false;
  containsLowerLetter = false;
  constainsNumber = false;
  containsSpecialChar = false;
  isLenghtEightOrMore = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initValue = changes['password'].currentValue ;
    if(changes['password'].currentValue !== null){
      this.verifyPassword(changes['password'].currentValue)
    }
  }
  verifyPassword(password: string){
    const pattern =  /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
    if(password.match(/[A-Z]/)) this.constainsCapitalLetter = true
    if(password.match(/[a-z]/)) this.containsLowerLetter = true
    if(password.match(/[0-9]/)) this.constainsNumber = true
    if (password.length >= 8) this.isLenghtEightOrMore = true;
    if(password.match(pattern)) this.containsSpecialChar = true
  }
}
