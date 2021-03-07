import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-coupons-item',
  templateUrl: './company-coupons-item.component.html',
  styleUrls: ['./company-coupons-item.component.css'],
  providers: [CompanyService]
})
export class CompanyCouponsItemComponent implements OnInit {


  @Input() coupon: Coupon
  @Input() id: number

  constructor() { }

  ngOnInit(): void {
    console.log(this.coupon);

  }

}


