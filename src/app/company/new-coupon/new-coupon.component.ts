import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrls: ['./new-coupon.component.css'],
  providers: [CompanyService]
})
export class NewCouponComponent implements OnInit {
  @ViewChild('f') couponForm: NgForm
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

  returnCoupon: Coupon


  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  onSubmit() {
   this.companyService.createCoupon(this.coupon)
  }

  printCoupon() {
    console.log(this.coupon);

  }

}
