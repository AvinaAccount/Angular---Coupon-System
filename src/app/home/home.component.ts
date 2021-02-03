import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  typeEmitter: string

  constructor(private route: ActivatedRoute, private router: Router) { }

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