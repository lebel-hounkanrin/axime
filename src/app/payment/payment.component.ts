import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BasketStoreService } from '../core/services/basket-store.service';
import { PaymentService } from '../core/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() orderId!:string;
  @Input() total!: number;
  @Output() closeModal = new EventEmitter()
  constructor(private router: Router, 
    private paymentService: PaymentService,
    private basketStoreService:BasketStoreService,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.paymentService.createPayment(this.total, this.orderId).subscribe(data =>{
      this.closeModal.emit();
      this.basketStoreService.clearBasket();
      this.router.navigateByUrl("/")
    })
  }
}
