// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
//
//
// @Component({
//   selector: 'app-root',
//   encapsulation: ViewEncapsulation.None,
//
//   template: `<router-outlet></router-outlet>`
// })
// export class AppComponent implements OnInit {
//   isFullScreen: any;
//   constructor (private activatedRoute: ActivatedRoute, private router: Router) {}
//
//   ngOnInit() {
//     this.router.events
//       .filter(e => {
//         return e instanceof NavigationEnd;
//       })
//       .switchMap(() => this.activatedRoute.firstChild.data)
//       .subscribe(data => {
//         this.isFullScreen = data['isFullScreen'];
//       });
//   }
// }
//
