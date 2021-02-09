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


  constructor(private couponService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    this.coupons = this.couponService.getCoupons()
  }

  backClicked() {
    this.location.back()
  }

}
