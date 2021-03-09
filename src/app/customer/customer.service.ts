import { Customer } from './../models/customer.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Coupon } from '../models/coupon.model';

@Injectable()
export class CustomerService {

  private coupons: Coupon[]
  couponsChanged = new EventEmitter<Coupon[]>()
  customersChanged = new EventEmitter<Customer[]>()


  constructor(private storageService: StorageService) {
    // this.coupons = [
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, 100, 1,500,"Title", 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'),
    // new Coupon(0, "Title", 100, 0, 'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
    // ]
  }

  getCoupons() {
    return this.coupons.slice()
  }


  getCouponById(id: number) {
    return this.coupons[id]
  }

 }