import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-shop-coupon-page',
  templateUrl: './shop-coupon-page.component.html',
  styleUrls: ['./shop-coupon-page.component.css'],
})
export class ShopCouponPageComponent implements OnInit {

  coupon: Coupon = {
    id: 0,
    amount: 0,
    title: '',
    startDate: '',
    endDate: '',
    category: 0,
    price: 0,
    imageURL: '',
  }
  coupons: Coupon[]
  @Input() selectedCoupon: number

  constructor(
    private location: Location,
    private customerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.selectedCoupon = +params['id'] })
    this.customerService.getAllCoupons()
    this.customerService.couponsEmiter.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.onSelectCoupon(this.selectedCoupon)
    })
  }

  onSelectCoupon(id: number) {
    for (let i = 0; i < this.coupons.length - 1; i++) {
      if (this.coupons[i].id === id) {
        this.coupon = this.coupons[i]
        break
      }
    }
    console.log(this.coupon);
  }

  onClickPurchase() {
    this.customerService.purchaseCoupon(this.selectedCoupon)
    this.customerService.couponEmiter.subscribe(coupon => this.coupon = coupon)
    this.location.back()
  }

  backClicked() {
    this.location.back()
  }
}
