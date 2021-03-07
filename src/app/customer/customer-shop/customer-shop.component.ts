import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-customer-shop',
  templateUrl: './customer-shop.component.html',
  styleUrls: ['./customer-shop.component.css'],
})
export class CustomerShopComponent implements OnInit {
  coupons: Coupon[]
  id: number

  constructor(private customerService: CustomerService,private location:Location) { }

  ngOnInit(): void {
    this.coupons = this.customerService.getCoupons()
  }

  backClicked() {
    this.location.back()
  }

}
