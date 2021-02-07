import { Coupon } from './../../../models/coupon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.css']
})
export class CouponItemComponent implements OnInit {
  @Input() coupon: Coupon
 

  constructor() { }

  ngOnInit(): void {
  
  }

}
