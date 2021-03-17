import { Customer } from './../models/customer.model';
import { Coupon } from './../models/coupon.model';
import { Token } from './../models/token.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable()
export class StorageService {
  token: string
  coupon: Coupon

  constructor(private http: HttpClient) { }

  getToken(email: string, password: string, type: string) {
    let params = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('type', type)
    const token = this.http.post<Token>('http://localhost:8080/api/login', params)
    token.subscribe(token => { this.token = token.token.toString() })
    return token

  }

  /* Company Functions */

  getCompanyCoupons(): Observable<Coupon[]> {
    const params = new HttpParams()
      .set("token", this.token)
    return this.http.get<Coupon[]>('http://localhost:8080/api/company/get_company_coupons', { params })
  }

  fetchCouponById(couponId: string): Observable<Coupon> {
    const params = new HttpParams()
      .set('token', this.token)
      .set('couponId', couponId)
    return this.http.get<Coupon>('http://localhost:8080/api/company/get_coupon', { params })
  }

  deleteCompanyCoupon(couponId: string) {
    const params = new HttpParams()
      .set('token', this.token)
      .set('couponId', couponId)
    return this.http.post('http://localhost:8080/api/company/remove_coupon', params, { responseType: "text" })

  }

  createNewCoupon(coupon: Coupon) {
    const params = new HttpParams()
      .set('token', this.token)
    return this.http.post('http://localhost:8080/api/company/create_coupon', coupon, { params })
  }

  getCompanyDetails() {
    const params = new HttpParams()
      .set('token', this.token)
    return this.http.get<Company>('http://localhost:8080/api/company/get_company', { params })
  }


  /* Customer Functions */

  fetchCustomerCoupons() {
    const params = new HttpParams()
      .set('token', this.token)
    return this.http.get<Coupon[]>('http://localhost:8080/api/customers/get_customer_coupons', { params })
  }

  deleteCustomerCoupon(couponId: number) {
    const params = new HttpParams()
      .set('token', this.token)
      .set('couponId', couponId.toString())
    // Need to cutch the message from the Back-End!<------------------------||||
    return this.http.delete<string>('http://localhost:8080/api/customers/remove_coupon', { params })
  }

  fetchCustomerDetails() {
    const params = new HttpParams()
      .set('token', this.token)
    return this.http.get<Customer>('http://localhost:8080/api/customers/get_customer', { params })
  }

  updateCustomerDetails(customer: Customer) {
    const params = new HttpParams()
      .set('token', this.token)
    return this.http.post<Customer>('http://localhost:8080/api/customers/update_customer', customer, { params })
  }


  purchaseCoupon(id: number): Observable<Coupon> {
    const params = new HttpParams()
      .set('token', this.token)
      .set('couponId', id.toString())
    return this.http.post<Coupon>('http://localhost:8080/api/customers/purchase_coupon', params)
  }

  

  /* Global function */
  /* This Global function serves the site in general 
  (Includes users who are not registered with the system)
  The purpose of its dedicated function is to present coupons to existing customers 
  and mainly to attract customers who are not registered with the system (without token!)
  */

  fetchAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/api/admin/get_all_coupons')
  }
}