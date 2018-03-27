import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-shell',
  encapsulation: ViewEncapsulation.None,
  template: `
    <template ngbModalContainer></template>
    <body>

    <div class="site-wrapper">
      <div class="cover-container">
        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">HWSBot.UI</h3>
            <nav>
              <ul class="nav masthead-nav">
                <li class="active"><a routerLink="#" routerLinkActive="active">Home</a></li>
                <li><a routerLink="/search/ebay" routerLinkActive="active">Ebay Search</a></li>
                <li><a href="https://www.reddit.com/user/rachelsroomate/">Reddit User</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <app-root class="card"></app-root>

          <div class="mastfoot">
            <div class="inner">
              <p><a href="https://github.com/lauerya">Ryan's Github</a></p>
            </div>
          </div>

        </div>

      </div>

    </div>
    </body>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppShellComponent implements OnInit {
  isFullScreen: any;
  constructor (private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter(e => {
        return e instanceof NavigationEnd;
      })
      .switchMap(() => this.activatedRoute.firstChild.data)
      .subscribe(data => {
        this.isFullScreen = data['isFullScreen'];
      });
  }
}
