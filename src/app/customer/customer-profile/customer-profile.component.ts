import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/customer/customer.service';
import { Location } from '@angular/common';
import { Customer } from './../../models/customer.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  @ViewChild('f') customerForm: NgForm
  editMode = false


  constructor(private location: Location, private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.getCustomerDetails()
    this.customerService.customerEmiter.subscribe((customer: Customer) => {
      this.customer = customer
    })
  }

  onClick() {
    this.customerService.updateCustomerDetails(this.customer)
    this.customerService.customerEmiter.subscribe((customer: Customer) => console.log(customer)
    )

    this.editMode = false
  }



  editClicked() {
    this.editMode = true
  }
  backClicked() {
    console.log(this.customer);
    this.location.back()
  }

}
