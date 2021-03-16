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

  onClickDelete() {
    this.customerService.removeCustomerCoupon(this.selectedCoupon)
    this.customerService.messageEmiter.subscribe((msg: string) => console.log(msg))
    this.location.back()

    /* Solve the Error: if the customer dont heve coupon ,the console show error */
  }

  onSelectCoupon(id: number) {
    for (let i = 0; i < this.coupons.length - 1; i++) {
      if (this.coupons[i].id === id) {
        this.coupon = this.coupons[i]
        break
      }
      console.log(this.coupon);
    }
  }

  backClicked() {
    this.location.back()
  }
}
