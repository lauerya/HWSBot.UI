import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HwsBotService} from "../../common/hwsbot-service";

@Component({
  selector: 'app-ebay-search',
  templateUrl: './ebay-search.component.html',
  styleUrls: ['./ebay-search.component.css']
})
export class EbaySearchComponent {
  title = 'search';
  value= ' ';
  itemList: Item[];
  showResults: boolean;

  constructor(private route: ActivatedRoute, private hwsbotService: HwsBotService) {}

  search(searchString: string) {
    this.showResults = false;
    this.route.params
      .switchMap((params: Params) => this.hwsbotService.getEbayItems(searchString))
      .subscribe(itemList => {
        this.itemList = itemList;
        this.showResults = true;
      })


  }
}
