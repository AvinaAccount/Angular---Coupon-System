import { Coupon } from './../models/coupon.model';
import { Customer } from './../models/customer.model';
import { Token } from './../models/token.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class StorageService {
  token: string

  subscribe(arg0: (coupons: any) => void) {
    throw new Error('Method not implemented.');
  }

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


  /* Not Done yet! */
  getCompanyCoupons():Observable<Coupon[]>{
    const params = new HttpParams()
      .set("token", this.token);
    return this.http.get<Coupon[]>('http://localhost:8080/api/company/get_company_coupons', { params })
  }


}