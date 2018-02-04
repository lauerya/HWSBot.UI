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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ResultItemComponent
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
