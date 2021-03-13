import { Coupon } from './../models/coupon.model';
import { Token } from './../models/token.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

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
    return this.http.post('http://localhost:8080/api/company/remove_coupon', params,{responseType: "text"})

  }
}