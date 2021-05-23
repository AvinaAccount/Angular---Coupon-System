import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-expired-coupon-item',
  templateUrl: './expired-coupon-item.component.html',
  styleUrls: ['./expired-coupon-item.component.css'],
  providers: [CustomerService]
})
export class ExpiredCouponItemComponent implements OnInit {

  @Input() coupon: Coupon
  @Input() id: number

  constructor() { }

  ngOnInit(): void {}

}
