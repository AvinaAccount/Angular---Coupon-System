import { Company } from './../models/company.model';
import { Coupon } from 'src/app/models/coupon.model';
import { StorageService } from './../common/storage.service';
import { EventEmitter, Injectable, Output } from "@angular/core"
import { Subject } from 'rxjs';

@Injectable()
export class CompanyService {
  @Output() couponsList = new EventEmitter<Coupon[]>()
  @Output() selectedCoupon = new EventEmitter<Coupon>()
  companyEmiter = new EventEmitter<Company>()
  errorChannel = new Subject<string>()
  private coupons: Coupon[]
  coupon: Coupon
  companyToken: string
  message: string
  company: Company


  constructor(private storagService: StorageService,) {
  }

  fetchCompanyCoupons() {
    this.storagService.getCompanyCoupons()
      .subscribe(coupons => {
        this.coupons = coupons
        this.onUpdateCouponsList()
      }, error => this.errorChannel.next(
        'There was a problem getting the companys coupons, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
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
      }, error => this.errorChannel.next(
        'There was a problem getting the specific coupon, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }

  onSelectCoupon() {
    this.selectedCoupon.emit(this.getCoupon())
  }

  getCoupon() {
    return this.coupon
  }

  removeCompanyCouponById(couponId: string) {
    this.storagService.deleteCompanyCoupon(couponId).subscribe(msg => {
      this.message = msg
    }, error => this.errorChannel.next(
      'There was a problem delete the specific coupon, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }


  createCoupon(coupon: Coupon) {
    this.storagService.createNewCoupon(coupon).subscribe(coupon => {
    }, error => this.errorChannel.next(
      'There was a problem create coupon, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }


  getCompanyDetails() {
    this.storagService.getCompanyDetails().subscribe(company => {
      this.company = company
      this.getCompany()
    }, error => this.errorChannel.next(
      'There was a problem getting the company details, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }

  getCompany() {
    this.companyEmiter.emit(this.company)
  }

  updateDetails(company: Company) {
    this.storagService.updateCompanyDetails(company).subscribe(company => {
      this.companyEmiter.emit(company)
    }, error => this.errorChannel.next(
      'There was a problem updating the company details, contact us and be sure the problem will soon be over! TRY LOGIN AGAIN'))
  }

  logout() {
    this.storagService.token = null
  }
}