import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.location.back()
  }

  onClickMyCoupons() {
    this.router.navigate(['company-coupons'], { relativeTo: this.route })
  }

  onClickLoguot(){
    this.router.navigate(['login'])
  }
}
