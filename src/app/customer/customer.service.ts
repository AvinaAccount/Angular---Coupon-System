import { Customer } from './../models/customer.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Coupon } from '../models/coupon.model';
import { Subject } from 'rxjs';

@Injectable()
export class CustomerService {
  private coupons: Coupon[]
  couponsEmiter = new EventEmitter<Coupon[]>()
  couponEmiter = new EventEmitter<Coupon>()
  customerEmiter = new EventEmitter<Customer>()
  messageEmiter = new EventEmitter<string>()
  errorChannel = new Subject<string>()

  constructor(private storageService: StorageService) {
    /* Empty */
  }

  getCustomerCoupons() {
    this.storageService.fetchCustomerCoupons().subscribe(coupons => {
      this.coupons = coupons
      this.couponsEmiter.emit(this.getCoupons())
    }, error => {
      this.errorChannel.next('You dont have coupons to redeem, go to the coupon store and purchase new coupons, TRY LOGIN AGAIN')
    })
  }

  getCoupons() {
    return this.coupons.slice()
  }


  removeCustomerCoupon(couponId: number) {
    this.storageService.deleteCustomerCoupon(couponId).subscribe(msg => {
      this.messageEmiter.emit(msg)
    }, error => {
      this.errorChannel.next('Your coupon was deleted, GO buy another coupons!')
    })
  }


  getCustomerDetails() {
    this.storageService.fetchCustomerDetails().subscribe(customer => {
      this.customerEmiter.emit(customer)      
    }, error => {
      this.errorChannel.next('There was a problem get your user details, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN')
    })
  }


  updateCustomerDetails(customer: Customer) {
    this.storageService.updateCustomerDetails(customer).subscribe(customer => {
      this.customerEmiter.emit(customer)
    }, error => this.errorChannel.next('There was a problem update your user details, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }


  purchaseCoupon(couponId: number) {
    this.storageService.purchaseCoupon(couponId).subscribe(coupon => {
      this.couponEmiter.emit(coupon)
    }, error => this.errorChannel.next('There was a problem purchase this coupon, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }


  logout() {
    this.storageService.token = null
  }


  /**
     * Global function
     * This Global function serves the site in general
     * (Includes users who are not registered with the system)
     * The purpose of its dedicated function is to present coupons to existing customers
     * and mainly to attract customers who are not registered with the system (without token!)
     */

  getAllCoupons() {
    this.storageService.fetchAllCoupons().subscribe(coupons => {
      this.coupons = coupons
      this.couponsEmiter.emit(this.getCoupons())
    }, error => this.errorChannel.next('There was a problem purchase this coupon, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }

}