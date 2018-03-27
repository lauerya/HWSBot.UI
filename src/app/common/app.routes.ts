import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "../areas/search/search.component";
import {ResultModalComponent} from "../areas/result/result-modal/result-modal.component";
import {EbaySearchComponent} from "../areas/ebay-search/ebay-search.component";
import {AppShellComponent} from "../app-shell";

export const ROUTES: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'search/reddit/',
        component: SearchComponent
      },
      {
        path: 'search/ebay/',
        component: EbaySearchComponent
      },
      {
        path: '**',
        redirectTo: 'search/reddit/'
      }
    ]
  }
];
