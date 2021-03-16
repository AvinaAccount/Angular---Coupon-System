import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { CompanyCouponsComponent } from './company/company-coupons/company-coupons.component';
import { NewCouponComponent } from './company/new-coupon/new-coupon.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ExpiredCouponPageComponent } from './customer/coupons-expired/expired-coupon-page/expired-coupon-page.component';
import { CouponsExpiredComponent } from './customer/coupons-expired/coupons-expired.component';
import { CustomerShopComponent } from './customer/customer-shop/customer-shop.component';
import { CouponPageComponent } from './customer/my-coupons/coupon-page/coupon-page.component';
import { MyCouponsComponent } from './customer/my-coupons/my-coupons.component';
import { LoginDetailsComponent } from './home/login-details/login-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCouponPageComponent } from './customer/customer-shop/shop-coupon-page/shop-coupon-page.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { CompanyCouponsPageComponent } from './company/company-coupons/company-coupons-page/company-coupons-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login", component: HomeComponent, children: [
      { path: '', component: UsersComponent },
      { path: "admin", component: LoginDetailsComponent },
      { path: "company", component: LoginDetailsComponent },
      { path: "customer", component: LoginDetailsComponent },
      
      /* Customer */
      { path: 'customer/customer-main', component: CustomerComponent },
      { path: 'customer/customer-main/coupons', component: MyCouponsComponent },
      { path: 'customer/customer-main/coupons/:id', component: CouponPageComponent },
      { path: 'customer/customer-main/shop', component: CustomerShopComponent },
      { path: 'customer/customer-main/shop/:id', component: ShopCouponPageComponent },
      { path: 'customer/customer-main/expired', component: CouponsExpiredComponent },
      { path: 'customer/customer-main/expired/:id', component: ExpiredCouponPageComponent },
      { path: 'customer/customer-main/profile', component: CustomerProfileComponent },
      
      /* Company */
      { path: 'company/company-main', component: CompanyComponent },
      { path: 'company/company-main/loguot', component: UsersComponent },
      { path: 'company/company-main/company-coupons', component: CompanyCouponsComponent },
      { path: 'company/company-main/company-coupons/:id', component: CompanyCouponsPageComponent },
      { path: 'company/company-main/new-coupon', component: NewCouponComponent },
      { path: 'company/company-main/company-profile', component: CompanyProfileComponent },


      { path: 'admin/admin-main', component: AdminComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
