import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { Coupon } from './../../models/coupon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css'],
  providers: [CustomerService]
})
export class MyCouponsComponent implements OnInit {
  coupons: Coupon[]


  constructor(private couponService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    this.coupons = this.couponService.getCoupons()
  }

  backClicked() {
    this.location.back()
  }
}
