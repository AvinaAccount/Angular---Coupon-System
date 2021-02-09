import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-shop-coupon-item',
  templateUrl: './shop-coupon-item.component.html',
  styleUrls: ['./shop-coupon-item.component.css']
})
export class ShopCouponItemComponent implements OnInit {
  @Input() coupon: Coupon
  @Input() id: number
  constructor() { }

  ngOnInit(): void {
  }

}
