import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.css'],
})
export class CustomerShopComponent implements OnInit {
  coupons: Coupon[]
  id: number
  errorMessage: string;

  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    this.customerService.getAllCoupons()
    this.customerService.couponsEmiter.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.cleneCouponList()
      /* If the token = '' in 'StorageService' the customer unable to by coupons 
      - no need to check login of the customer */
      })
    this.customerService.errorChannel.subscribe(errorMessage => { this.errorMessage = errorMessage })

  }

  /* This function remove coupons with amount 0 */
  cleneCouponList() {
    for (let i = 0; i < this.coupons.length; i++) {
      if (this.coupons[i].amount === 0) {
        this.coupons.splice(i, 1)
      }
    }
  }


  backClicked() {
    this.location.back()
  }


  closeErrorMessage() {
    this.backClicked()
    this.errorMessage = ''
  }

}
