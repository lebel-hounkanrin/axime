import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../core/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() orderId!:string;
  @Input() total!: number
  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.paymentService.createPayment(this.total, this.orderId).subscribe(data =>{
      this.router.navigateByUrl("/")
    })
  }
}
