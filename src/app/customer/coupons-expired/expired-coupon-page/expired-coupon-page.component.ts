import { CustomerService } from './../../customer.service';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-expired-coupon-page',
  templateUrl: './expired-coupon-page.component.html',
  styleUrls: ['./expired-coupon-page.component.css'],
  providers:[CustomerService]
})
export class ExpiredCouponPageComponent implements OnInit {

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
