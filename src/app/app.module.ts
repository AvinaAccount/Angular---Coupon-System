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
import { CouponItemComponent } from './customer/my-coupons/coupon-item/coupon-item.component';

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
    CouponItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
