import { Coupon } from './../models/coupon.model';
export class CustomerService {
          coupons: Coupon[]

          constructor() {
                    this.coupons = [new Coupon("Title", 100), new Coupon("Title", 100), new Coupon("Title", 100)]
          }

          getCoupons() {
                    return this.coupons
          }
}