
import { Coupon } from 'src/app/models/coupon.model';
import { Location } from '@angular/common';
import { CompanyService } from './../company.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-company-coupons',
  templateUrl: './company-coupons.component.html',
  styleUrls: ['./company-coupons.component.css'],
  providers: [CompanyService]
})
export class CompanyCouponsComponent implements OnInit {
  @Output() coupons: Coupon[]
  coupon: Coupon



  constructor(private companyService: CompanyService, private location: Location) {
  }

  ngOnInit(): void {




  }

  backClicked() {
    // console.log(this.companyService.fetchAllCoupons())
    // console.log(this.coupon);
    this.coupons = this.companyService.getCoupons()
    console.log(this.coupon);
    
    this.location.back()
  }

}
