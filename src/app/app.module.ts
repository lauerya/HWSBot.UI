import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchComponent } from './areas/search/search.component'
import { RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HwsBotService} from './common/services/hwsbot-service';
import {HttpClientModule} from '@angular/common/http';
import {ROUTES} from './common/app.routes';
import {HttpClient} from './common/http-client';
import { ResultComponent } from './areas/result/result.component';
import {ResultItemComponent} from './areas/result/result-item/result-item.component';
import {SortPipe} from './areas/result/sort.pipe';
import { ResultModalComponent } from 'app/areas/result/result-modal/result-modal.component';
import { ModalComponent } from './common/modal/modal.component';
import { CardComponent } from './common/card/card.component';
import { EbaySearchComponent } from './areas/ebay-search/ebay-search.component';
import {AppShellComponent} from './app-shell';
import { EbayResultComponent } from './areas/ebay-search/ebay-result/ebay-result.component';
import { EbayResultItemComponent } from './areas/ebay-search/ebay-result-item/ebay-result-item.component';
import {ProductComponent} from './common/product/product.component';
import { HomeComponent } from './areas/home/home.component';
import { HwsNavbarComponent } from './common/hws-navbar/hws-navbar.component';
import { ProductFormComponent } from './common/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './common/services/product.service';

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
    EbayResultItemComponent,
    ProductComponent,
    HomeComponent,
    HwsNavbarComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  RouterModule.forRoot(ROUTES),
],
  providers: [ HwsBotService, ProductService, RouterModule, HttpClient],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
