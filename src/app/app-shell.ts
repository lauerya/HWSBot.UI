import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-shell',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="site-wrapper">
      <div class="cover-container">
        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">HWSBot.UI</h3>
            <nav>
              <ul class="nav masthead-nav">
                <li class="active"><a routerLink="reddit" routerLinkActive="active">Reddit Search</a></li>
                <li><a routerLink="ebay" routerLinkActive="active">Ebay Search</a></li>
                <li><a href="https://www.reddit.com/user/rachelsroomate/">Reddit User</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
    <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppShellComponent implements OnInit {
  constructor (private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter(e => {
        return e instanceof NavigationEnd;
      })

  }
}
