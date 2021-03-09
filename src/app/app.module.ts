import { CompanyService } from './company/company.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { StorageService } from './common/storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { CustomerShopComponent } from './customer/customer-shop/customer-shop.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CouponsExpiredComponent } from './customer/coupons-expired/coupons-expired.component';
import { HomeComponent } from './home/home.component';
import { LoginDetailsComponent } from './home/login-details/login-details.component';
import { FormsModule } from '@angular/forms';
import { MyCouponsComponent } from './customer/my-coupons/my-coupons.component';
import { CouponPageComponent } from './customer/my-coupons/coupon-page/coupon-page.component';
import { CouponItemComponent } from './customer/my-coupons/coupon-item/coupon-item.component';
import { ExpiredCouponItemComponent } from './customer/coupons-expired/expired-coupon-item/expired-coupon-item.component';
import { ExpiredCouponPageComponent } from './customer/coupons-expired/expired-coupon-page/expired-coupon-page.component';
import { ShopCouponItemComponent } from './customer/customer-shop/shop-coupon-item/shop-coupon-item.component';
import { ShopCouponPageComponent } from './customer/customer-shop/shop-coupon-page/shop-coupon-page.component';
import { UsersComponent } from './home/users/users.component';
import { AdminComponent } from './admin/admin.component';
import { NewCouponComponent } from './company/new-coupon/new-coupon.component';
import { CompanyCouponsComponent } from './company/company-coupons/company-coupons.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { CompanyCouponsItemComponent } from './company/company-coupons/company-coupons-item/company-coupons-item.component';
import { CompanyCouponsPageComponent } from './company/company-coupons/company-coupons-page/company-coupons-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CompanyComponent,
    CustomerShopComponent,
    CustomerProfileComponent,
    CouponsExpiredComponent,
    HomeComponent,
    LoginDetailsComponent,
    MyCouponsComponent,
    CouponItemComponent,
    CouponPageComponent,
    ExpiredCouponItemComponent,
    ExpiredCouponPageComponent,
    ShopCouponItemComponent,
    ShopCouponPageComponent,
    UsersComponent,
    AdminComponent,
    NewCouponComponent,
    CompanyCouponsComponent,
    CompanyProfileComponent,
    CompanyCouponsItemComponent,
    CompanyCouponsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService,CompanyService, StorageService],
  bootstrap: [AppComponent],

})
export class AppModule { }
