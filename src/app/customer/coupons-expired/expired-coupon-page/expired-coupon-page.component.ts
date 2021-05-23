import { CustomerService } from './../../customer.service';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-expired-coupon-page',
  templateUrl: './expired-coupon-page.component.html',
  styleUrls: ['./expired-coupon-page.component.css'],
  providers: [CustomerService]
})
export class ExpiredCouponPageComponent implements OnInit {

  coupon: Coupon = {
    id: 0,
    amount: 0,
    title: '',
    startDate: '',
    endDate: '',
    category: 0,
    price: 0,
    imageURL: '',
    description: ''
  }
  coupons: Coupon[]
  @Input() selectedCoupon: number
  errorMessage: string;

  constructor(
    private location: Location,
    private customerService: CustomerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.selectedCoupon = +params['id'] })
    
    this.customerService.getCustomerCoupons()
    this.customerService.couponsEmiter.subscribe((coupons: Coupon[]) => {
      this.coupons = coupons
      this.getSelectedCoupon()
    })

    this.customerService.errorChannel.subscribe(errorMessage => { this.errorMessage = errorMessage })
  }

  getSelectedCoupon() {
    for (let i = 0; i < this.coupons.length - 1; i++) {
      if (this.coupons[i].id === this.selectedCoupon) {
        this.coupon = this.coupons[i]
        break
      }
    }
  }

  backClicked() {
    this.location.back()
  }


  closeErrorMessage() {
    this.backClicked()
    this.errorMessage = ''
  }
}
