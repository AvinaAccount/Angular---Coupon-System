import { Location } from '@angular/common';
import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer: Customer
  constructor(private location: Location) {
    this.customer = new Customer(1, 'Avinadav', 'Hazan', 'Avinahazan@gmail.com', '1234')
  }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back()
  }

}
