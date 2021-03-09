import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrls: ['./new-coupon.component.css'],
  providers: [CompanyService]
})
export class NewCouponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
