import { Token } from './../../models/token.model';
import { StorageService } from './../../common/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompanyService } from 'src/app/company/company.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
  @ViewChild('f') logiinForm: NgForm
  userType: string
  token: string
  tokenLength: number

  constructor(private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private storagService: StorageService,
    private companyService: CompanyService

  ) { }

  ngOnInit(): void {
    this.userType = this.route.snapshot.url[0].toString()
  }

  onClickLogin() {
    // this.token = this.storagService.getToken(this.userType,)
    /* Need to add check if the details are correct! */

  }

  backClicked() {
    this.location.back()
  }


  onSubmit() {
    let email = this.logiinForm.value.email
    let password = this.logiinForm.value.password


    this.storagService.getToken(email, password, this.userType).subscribe(
      tokenObj => {
        this.token = tokenObj.token.toString()
        this.tokenLength = this.token.length
   
        if (this.userType === 'admin'&& this.tokenLength === 15) {
          this.router.navigate(['admin-main'], { relativeTo: this.route })
        } else if (this.userType === 'company' && this.tokenLength === 10) {
          this.router.navigate(['company-main'], { relativeTo: this.route })
          this.companyService.companyToken = this.token
        } else if (this.userType === 'customer' && this.tokenLength === 5) {
          this.router.navigate(['customer-main'], { relativeTo: this.route })
    
          /* Add 'else' for error. */
        }
      })

  }


}