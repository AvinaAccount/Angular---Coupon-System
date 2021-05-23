import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/company/company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company: Company = {
    id: 0,
    name: '',
    email: '',
    password: '',
    logoURL: ''
  }
  editMode = false
  @ViewChild('f') companyForm: NgForm
  errorMessage: string;

  constructor(private location: Location, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails()
    this.companyService.companyEmiter.subscribe(
      (company: Company) => {
        this.company = company
      })

    this.companyService.errorChannel.subscribe(errorMessage => this.errorMessage = errorMessage)
  }


  editClicked() {
    this.editMode = true
  }
  onClickDone() {
    this.editMode = false
    this.companyService.updateDetails(this.company)
    this.companyService.companyEmiter.subscribe(company => this.company = company)
    console.log(this.company);
  }

  backClicked() {
    this.location.back()
  }


  closeErrorMessage() {
    this.backClicked()
    this.errorMessage = ''
  }

}
