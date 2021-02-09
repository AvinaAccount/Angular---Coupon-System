import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
