import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchComponent } from './areas/search/search.component'
import { RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {HwsBotService} from ".//common/hwsbot-service";
import {HttpClientModule} from "@angular/common/http";
import {ROUTES} from "./common/app.routes";
import {HttpClient} from "./common/http-client";
import { ResultComponent } from './areas/result/result.component';
import {ResultItemComponent} from "./areas/result/result-item/result-item.component";
import {SortPipe} from "./areas/result/sort.pipe";
import { ResultModalComponent } from 'app/areas/result/result-modal/result-modal.component';
import { ModalComponent } from './common/modal/modal.component';
import { CardComponent } from './common/card/card.component';
import { EbaySearchComponent } from './areas/ebay-search/ebay-search.component';
import {AppShellComponent} from "./app-shell";
import { EbayResultComponent } from './areas/ebay-search/ebay-result/ebay-result.component';
import { EbayResultItemComponent } from './areas/ebay-search/ebay-result-item/ebay-result-item.component';

@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    ResultItemComponent,
    ResultModalComponent,
    SortPipe,
    ModalComponent,
    CardComponent,
    AppShellComponent,
    EbaySearchComponent,
    EbayResultComponent,
    EbayResultItemComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
HttpClientModule,
  RouterModule.forRoot(ROUTES),
],
  providers: [ HwsBotService, RouterModule, HttpClient],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
