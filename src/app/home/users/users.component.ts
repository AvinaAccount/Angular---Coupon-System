import { CompanyService } from './../../company/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSelectUser(type: string) {
    if (type === 'admin') {
      this.router.navigate(['admin'], { relativeTo: this.route })
    } else if (type === 'company') {
      this.router.navigate(['company'], { relativeTo: this.route })
    } else if (type === 'customer') {
      this.router.navigate(['customer'], { relativeTo: this.route })
    }
  }

}
