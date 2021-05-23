import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-coupons-expired',
  templateUrl: './coupons-expired.component.html',
  styleUrls: ['./coupons-expired.component.css'],
  providers: [CustomerService]
})
export class CouponsExpiredComponent implements OnInit {

  coupons: Coupon[]
  getToBeExpired: Coupon[] = []
  errorMessage: string;


  constructor(private customerService: CustomerService, private location: Location) {}


  ngOnInit(): void {
    this.customerService.getCustomerCoupons()
    this.customerService.couponsEmiter.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.expiresInAweek()
    })
    this.customerService.errorChannel.subscribe(errorMessage => this.errorMessage = errorMessage)
  }


  expiresInAweek() {
    for (let i = 0; i < this.coupons.length - 1; i++) {

      let endDate = new Date(this.coupons[i].endDate)
      let inAWeek = new Date()
      inAWeek.setDate(inAWeek.getDate())

      let time = endDate.getTime() - inAWeek.getTime()
      let days = (time / (1000 * 3600 * 24)) - 1
      days = Math.floor(days)

      console.log(days)

      if (days <= 7) {
        this.getToBeExpired.push(this.coupons[i])
      }
    }

    this.coupons = this.getToBeExpired
  }


  backClicked() {
    this.location.back()
  }


  closeErrorMessage() {
    this.backClicked()
    this.errorMessage = ''
  }

}
