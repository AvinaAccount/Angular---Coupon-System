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
 
  coupons: Coupon[]
  coupon: Coupon = {
    id: 0,
    amount: 0,
    title: '',
    startDate: '',
    endDate: '',
    category: 0,
    price: 0,
    imageURL: '',
    description:''
  }

  @Output() couponIdEmiter = new EventEmitter<Coupon>()
  selectedCoupon: string;
  errorMessage: string;

  constructor(
    private companyService: CompanyService,
    private location: Location) {}

  
    ngOnInit(): void {
    this.companyService.fetchCompanyCoupons()
    this.companyService.couponsList.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.sortCouponsBySele(coupons)
    })
    this.companyService.errorChannel.subscribe(errorMessage => this.errorMessage = errorMessage)
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


  sortCouponsByStartDate() {
    this.coupons.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
  }


  sortCouponsByEndDate() {
    this.coupons.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())
  }


  backClicked() {
    this.location.back()
  }

  
  closeErrorMessage() {
    this.backClicked()
    this.errorMessage = ''
  }

}
