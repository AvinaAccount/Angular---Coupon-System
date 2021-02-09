import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-shop-coupon-page',
  templateUrl: './shop-coupon-page.component.html',
  styleUrls: ['./shop-coupon-page.component.css'],
  providers:[CustomerService]
})
export class ShopCouponPageComponent implements OnInit {

  coupon: Coupon
  @Input() selectedCoupon: number

  constructor(
    private location: Location,
    private customerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.selectedCoupon = +params['id'] })
    this.coupon = this.customerService.getCouponById(this.selectedCoupon)
  }
  backClicked() {
    this.location.back()
  }
}
