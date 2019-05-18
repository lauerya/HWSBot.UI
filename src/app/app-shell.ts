import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-shell',
  encapsulation: ViewEncapsulation.None,
  template: `
  <template ngbModalContainer></template>
  <hws-navbar></hws-navbar>
  <div class="container view-container contain">
  <router-outlet></router-outlet>
</div>
  `,
  styles:[`.main-display { display: contents; } .contain {margin-top:60px;}` ]
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
