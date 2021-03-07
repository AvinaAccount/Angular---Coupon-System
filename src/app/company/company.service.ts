import { Coupon } from 'src/app/models/coupon.model';
import { StorageService } from './../common/storage.service';
import { Injectable } from "@angular/core"


@Injectable()
export class CompanyService {
  private coupons: Coupon[]
  companyToken: string
  coupon: Coupon



  constructor(private storagService: StorageService) {
    this.fetchAllCoupons()
  }

  fetchAllCoupons() {
    this.storagService.getCompanyCoupons().subscribe(
      coupons => {
        this.coupons = coupons
        this.coupon  = new Coupon(
          coupons[0].amount,
          coupons[0].category,
          coupons[0].endDate,
          coupons[0].id,
          coupons[0].imageURL,
          coupons[0].price,
          coupons[0].startDate,
          coupons[0].title,
        )
        console.log(this.coupon)
        return this.coupons
      }
      )
    }
    
    getCoupons() {
    // console.log(this.coupon)
      return this.coupons
  }

  getCoupon() {
    return this.coupon
  }

  getCouponById(id: number) {
    return this.coupons[id]
  }

}