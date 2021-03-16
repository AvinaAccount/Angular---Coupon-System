import { Customer } from './../models/customer.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Coupon } from '../models/coupon.model';

@Injectable()
export class CustomerService {
  private coupons: Coupon[]
  couponsEmiter = new EventEmitter<Coupon[]>()
  couponEmiter = new EventEmitter<Coupon>()
  customerEmiter = new EventEmitter<Customer>()
  messageEmiter = new EventEmitter<string>()


  constructor(private storageService: StorageService) {
  }

  getCustomerCoupons() {
    this.storageService.fetchCustomerCoupons().subscribe(coupons => {
      this.coupons = coupons
      this.couponsEmiter.emit(this.getCoupons())
    })
  }

  getCoupons() {
    return this.coupons.slice()
  }


  removeCustomerCoupon(couponId: number) {
    this.storageService.deleteCustomerCoupon(couponId).subscribe(msg => this.messageEmiter.emit(msg))
  }


  getCustomerDetails() {
    this.storageService.fetchCustomerDetails().subscribe(customer => {
      this.customerEmiter.emit(customer)
    })
  }

  updateCustomerDetails(customer: Customer) {
    this.storageService.updateCustomerDetails(customer).subscribe(customer => {
      this.customerEmiter.emit(customer)
    })
  }

  purchaseCoupon(couponId: number) {
    this.storageService.purchaseCoupon(couponId).subscribe(coupon => { this.couponEmiter.emit(coupon) })
  }




  /**
     * Global function
     * This Global function serves the site in general
     * (Includes users who are not registered with the system)
     * The purpose of its dedicated function is to present coupons to existing customers
     * and mainly to attract customers who are not registered with the system (without token!)
     */

  getAllCoupons() {
    this.storageService.fetchAllCoupons().subscribe(coupons => this.couponsEmiter.emit(coupons))
  }

}