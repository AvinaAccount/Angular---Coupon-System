import { Coupon } from 'src/app/models/coupon.model';
import { Location } from '@angular/common';
import { CompanyService } from './../company.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css'],
  providers: [CompanyService]
})
export class CompanyCouponsComponent implements OnInit {
  /* Add  explanation*/
  coupons: Coupon[]
  coupon: Coupon
  @Output() couponIdEmiter = new EventEmitter<Coupon>()
  selectedCoupon: string;



  constructor(
    private companyService: CompanyService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.companyService.fetchCompanyCoupons()
    this.companyService.couponsList.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.sortCouponsBySele(coupons)
    })
  }

  /*Default  sort*/
  sortCouponsBySele(coupons: Coupon[]) {
    coupons.sort((couponA: Coupon, couponB: Coupon) => {
      if (couponA.amount < couponB.amount) return -1
    })
  }

  sortCouponsByTitle() {
    this.coupons.sort((a, b) => a.title.localeCompare(b.title))
  }

  backClicked() {
    this.location.back()
  }

}
