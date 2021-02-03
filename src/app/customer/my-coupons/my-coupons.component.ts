import { Coupon } from './../../models/coupon.model';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {
  coupons: Coupon[]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.coupons = this.customerService.getCoupons()
  }

}
