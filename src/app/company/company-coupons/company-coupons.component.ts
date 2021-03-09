import { Coupon } from 'src/app/models/coupon.model';
import { Location } from '@angular/common';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css'],
  providers: [CompanyService]
})
export class CompanyCouponsComponent implements OnInit {
  /* Add  explanation*/
  coupons: Coupon[]




  constructor(private companyService: CompanyService, private location: Location) {
  }

  ngOnInit(): void {
    this.companyService.fetchAllCoupons()
    this.companyService.couponsList.subscribe((coupons: Coupon[]) => { this.coupons = coupons })
  }

  backClicked() {
    this.location.back()
  }

}
