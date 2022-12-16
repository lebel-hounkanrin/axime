import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-after-payement',
  templateUrl: './after-payement.component.html',
  styleUrls: ['./after-payement.component.css']
})
export class AfterPayementComponent implements OnInit {
  timelineForm!: FormGroup;
  timelineCtrl! : FormControl;
  timeLineMessage! :string;
  totalAmount! : number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const total = this.route.snapshot.paramMap.get("total");
    this.totalAmount = total ? +total: 0
    this.timelineCtrl = this.formBuilder.control("")
    this.timelineForm = this.formBuilder.group({
      timelineCtrl : this.timelineCtrl
    });
    this.timelineCtrl.valueChanges.subscribe(val => this.timeLineMessage = this.dispalyPaymentMessage(val, this.totalAmount))
  }

  onSubmit(){console.log(this.timelineCtrl.value)}

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
      return `Payez ${prices[0]} en une fois pour toute`
    }
    if(timeline ==2){
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} maintenant et ${prices[1]} chaque semaine`
    }
    if(timeline ==3){
      const prices = this.computePrice(timeline, total);
      return `Payez ${prices[0]} maintenant et ${prices[1]} chaque 10 jours`
    }
    if(timeline ==4){
      const prices = this.computePrice(timeline, total);
      return `Payez  ${prices[0]} maintenant et ${prices[1]} à la fin du mois.`
    }
    return "";
  }

}
