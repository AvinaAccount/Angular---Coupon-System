import { CustomerService } from './../../customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-coupon-page',
  templateUrl: './coupon-page.component.html',
  styleUrls: ['./coupon-page.component.css']
})
export class CouponPageComponent implements OnInit {

  coupons: Coupon[]
  @Input() selectedCoupon: number

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.coupons = this.customerService.getCoupons()
  }

}
