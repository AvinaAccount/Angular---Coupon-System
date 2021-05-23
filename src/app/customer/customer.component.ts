import { CustomerService } from 'src/app/customer/customer.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],

})
export class CustomerComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }


  ngOnInit(): void {}


  backClicked() {
    this.location.back()
  }


  onClickMyCoupons() {
    this.router.navigate(['coupons'], { relativeTo: this.route })
  }


  onClickLoguot() {
    this.customerService.logout()
    this.router.navigate(['login'])
  }

}
