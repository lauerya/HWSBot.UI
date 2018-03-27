import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ResultItemComponent,
    ResultModalComponent,
    SortPipe,
    ModalComponent,
    CardComponent,
    AppShellComponent,
    EbaySearchComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
HttpClientModule,
  RouterModule.forRoot(ROUTES, {useHash: false}),
],
  providers: [ HwsBotService, RouterModule, HttpClient],
  bootstrap: [AppComponent, SearchComponent]
})
export class AppModule { }
