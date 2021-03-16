import { Customer } from './../../models/customer.model';
import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { Coupon } from './../../models/coupon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css'],
})
export class MyCouponsComponent implements OnInit {
  coupons: Coupon[]


  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    this.customerService.getCustomerCoupons()
    this.customerService.couponsEmiter.subscribe(coupons => this.coupons = coupons)
  }

  backClicked() {
    this.location.back()
  }
}
