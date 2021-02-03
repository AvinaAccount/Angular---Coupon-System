import { Coupon } from './../models/coupon.model';
export class CustomerService {
          coupons: Coupon[]

          constructor() {
                    this.coupons = [
                              new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
                              new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
                              new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'), new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
                              new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
                              new Coupon(0, 0, 'Test-1', 100, 0, 10 / 10 / 2012, 10 / 10 / 2012, 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
                    ]
          }

          getCoupons() {
                    return this.coupons
          }
}