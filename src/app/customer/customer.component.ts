import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { state } from '@angular/animations';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back()
  }

  onMyCoupons() {
    this.router.navigate(['coupons'], { relativeTo: this.route })
  }

}
