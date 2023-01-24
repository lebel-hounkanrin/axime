import { basketInitialState } from './../store/basket/basket.reducer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketStoreService } from '../core/services/basket-store.service';
import { Product } from '../core/models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-after-payement',
  templateUrl: './after-payement.component.html',
  styleUrls: ['./after-payement.component.css']
})
export class AfterPayementComponent implements OnInit, OnDestroy {
  timelineForm!: FormGroup;
  timelineCtrl! : FormControl;
  timeLineMessage! :string;
  totalAmount! : number;
  order :{productId: string, product_quantity: number}[] = [];

  missedProductName : Product = new Product();
  missedQuantity: number =0;
  showModal=false;
  missedProductMsg ="";
  messaageTitle = ""
  displayButton = true;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRroute: ActivatedRoute,
    private basketStoreService: BasketStoreService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.order= basketInitialState.items
    const total = this.activatedRroute.snapshot.paramMap.get("total");
    this.totalAmount = total ? +total: 0
    this.timelineCtrl = this.formBuilder.control("")
    this.timelineForm = this.formBuilder.group({
      timelineCtrl : this.timelineCtrl
    });
    this.timelineCtrl.valueChanges.subscribe(val => this.timeLineMessage = this.dispalyPaymentMessage(val, this.totalAmount))
  }

  onSubmit(){
    this.basketStoreService.orderProduct(this.order).subscribe({
      next: (data: any) => {
        const paymentModal = this.modalService.open(PaymentComponent, {centered: true});
        paymentModal.componentInstance.orderId = data.id
        paymentModal.componentInstance.total = this.totalAmount
        //this.router.navigateByUrl(`/paid/${this.price}`)
        //this.router.navigateByUrl("/")
      },
      error: async (error: any) => {
        
      }
    });
  }

  computePrice(timeLine: number, total:number): number[]{
    if(timeLine ==1) return [total];
    if(timeLine ==2) {
      const interestRate = (total*10)/100
      const firstPart = (total/4)+interestRate
      return [firstPart, total/4]
    }
    if(timeLine ==3) {
      const interestRate = (total*10)/100
      const firstPart = (total/3)+interestRate
      return [firstPart, total/3]
    }
    if(timeLine ==4) {
      const interestRate = (total*10)/100
      return [interestRate,  total]
    }
    return [total]
  }

  dispalyPaymentMessage(timeline:number, total:number): string{
    if(timeline ==1){
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA en une fois pour toute`
    }
    if(timeline ==2){
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA maintenant et ${prices[1]} FCFA chaque semaine`
    }
    if(timeline ==3){
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} FCFA maintenant et ${prices[1]} FCFA chaque 10 jours`
    }
    if(timeline ==4){
      const prices = this.computePrice(timeline, total);
      return `Payez  ${prices[0]} FCFA maintenant et ${prices[1]} FCFA à la fin du mois.`
    }
    return "";
  }

  ngOnDestroy(): void {
      basketInitialState.items = []
  }
}
