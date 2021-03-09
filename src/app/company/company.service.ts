import { Coupon } from 'src/app/models/coupon.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable, Output } from "@angular/core"

@Injectable()
export class CompanyService {
  private coupons: Coupon[]
  @Output() couponsList = new EventEmitter<Coupon[]>()
  companyToken: string


  constructor(private storagService: StorageService,) {
   
  }

  fetchAllCoupons() {
    this.storagService.getCompanyCoupons()
      .subscribe(coupons => {
        this.coupons = coupons
        this.onUpdateCouponsList()
      })
    }
    
    onUpdateCouponsList(){
      this.couponsList.emit(this.getCoupons())
    }
    
    getCoupons() {
    return this.coupons.slice()
  }

  getCouponById(id: number) {
    return this.coupons[id]
  }
}