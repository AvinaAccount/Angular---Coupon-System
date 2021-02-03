import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  userType: string

  constructor(private location: Location,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userType = this.route.snapshot.url[1].toString()
  }

  onClickLogin() {
    if (this.userType === 'admin') {
      this.router.navigate(['admin-main'], { relativeTo: this.route })
    } else if (this.userType === 'company') {
      this.router.navigate(['company-main'], { relativeTo: this.route })
    } else if (this.userType === 'customer') {
      this.router.navigate(['customer-main'], { relativeTo: this.route })
    }
  }

  backClicked() {
    this.location.back()
  }

}