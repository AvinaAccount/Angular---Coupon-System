import { Coupon } from './../../models/coupon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})
export class MyCouponsComponent implements OnInit {
  coupons: Coupon[]

  constructor() { }

  ngOnInit(): void {
  }

}
