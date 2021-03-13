import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrls: ['./new-coupon.component.css'],
  providers: [CompanyService]
})
export class NewCouponComponent implements OnInit {
  @ViewChild('f') couponForm: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.couponForm);

  }

}
