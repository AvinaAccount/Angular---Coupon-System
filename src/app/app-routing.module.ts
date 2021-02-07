import { CouponPageComponent } from './customer/my-coupons/coupon-page/coupon-page.component';
import { MyCouponsComponent } from './customer/my-coupons/my-coupons.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { LoginDetailsComponent } from './home/login-details/login-details.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: HomeComponent },
  { path: "login/admin", component: LoginDetailsComponent },
  { path: "login/company", component: LoginDetailsComponent },
  { path: "login/customer", component: LoginDetailsComponent },
  { path: 'login/admin/admin-main', component: AdminComponent },
  { path: 'login/company/company-main', component: CompanyComponent },
  { path: 'login/customer/customer-main', component: CustomerComponent },
  {path: 'login/customer/customer-main/coupons', component: MyCouponsComponent},
  {path: 'login/customer/customer-main/coupons/:id', component: CouponPageComponent},





  // TODO: Fix the routing by synchronised with the DB.

  // Doesn't work with children routing.<--------------------| Check Y!

  // TODO: Fix the routing by synchronised with the DB.

  // Doesn't work with children routing.<--------------------| Check Y!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
