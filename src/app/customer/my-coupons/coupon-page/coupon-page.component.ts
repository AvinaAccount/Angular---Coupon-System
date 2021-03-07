import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-coupon-page',
  templateUrl: './coupon-page.component.html',
  styleUrls: ['./coupon-page.component.css'],
})
export class CouponPageComponent implements OnInit {

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
