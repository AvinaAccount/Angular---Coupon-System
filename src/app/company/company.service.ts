import { Coupon } from 'src/app/models/coupon.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable, Output } from "@angular/core"

@Injectable()
export class CompanyService {
  @Output() couponsList = new EventEmitter<Coupon[]>()
  private coupons: Coupon[]
  @Output() selectedCoupon = new EventEmitter<Coupon>()
  coupon: Coupon
  /* Need this property? 'companyToken'*/
  companyToken: string
  message: string
  messageEmiter = new EventEmitter<string>()


  constructor(private storagService: StorageService,) {

  }

  fetchAllCoupons() {
    this.storagService.getCompanyCoupons()
      .subscribe(coupons => {
        this.coupons = coupons
        this.onUpdateCouponsList()
      })
  }

  onUpdateCouponsList() {
    this.couponsList.emit(this.getCoupons())
  }

  getCoupons() {
    return this.coupons.slice()
  }

  fetchCouponById(id: string) {
    this.storagService.fetchCouponById(id)
      .subscribe(coupon => {
        this.coupon = coupon
        this.onSelectCoupon()

        console.log('company.service', this.coupon);

      })
  }

  onSelectCoupon() {
    this.selectedCoupon.emit(this.getCoupon())
  }

  getCoupon() {
    return this.coupon
  }

  removeCompanyCouponById(couponId: string) {
    this.storagService.deleteCompanyCoupon(couponId).subscribe(msg => this.message = msg)
    this.getDeleteCouponMessage()
  }

  getDeleteCouponMessage() {
    this.messageEmiter.emit(this.message)
  }
}