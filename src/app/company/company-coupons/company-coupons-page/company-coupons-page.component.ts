import { Location } from '@angular/common';
import { CompanyService } from './../../company.service';
import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/customer/customer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company-coupons-page',
  templateUrl: './company-coupons-page.component.html',
  styleUrls: ['./company-coupons-page.component.css'],
  providers: [CompanyService]
})
export class CompanyCouponsPageComponent implements OnInit {

  coupon: Coupon
  @Input() selectedCoupon: number

  constructor(
    private location: Location,
    private companyService: CompanyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.selectedCoupon = +params['id'] })
    this.coupon = this.companyService.getCouponById(this.selectedCoupon)
  }
  backClicked() {
    this.location.back()
  }

}
