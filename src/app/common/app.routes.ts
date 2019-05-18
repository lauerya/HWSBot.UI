import {Routes} from "@angular/router";
import {SearchComponent} from "../areas/search/search.component";
import {EbaySearchComponent} from "../areas/ebay-search/ebay-search.component";
import {HomeComponent} from '../areas/home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
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
  redirectTo: ''
}
]
}
];
