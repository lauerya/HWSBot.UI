import {Routes} from "@angular/router";
import {SearchComponent} from "../areas/search/search.component";
import {EbaySearchComponent} from "../areas/ebay-search/ebay-search.component";
import {AppShellComponent} from "../app-shell";

export const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'reddit',
        component: SearchComponent
      },
      {
        path: 'ebay',
        component: EbaySearchComponent
      },
      {
        path: '**',
  redirectTo: 'reddit '
}
]
}
];
