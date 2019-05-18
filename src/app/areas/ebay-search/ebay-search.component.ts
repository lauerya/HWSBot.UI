import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HwsBotService} from "../../common/services/hwsbot-service";

@Component({
  selector: 'ebay-search',
  templateUrl: './ebay-search.component.html',
  styleUrls: ['./ebay-search.component.scss']
})
export class EbaySearchComponent {
  title = 'search';
  value= ' ';
  itemList: EbayItem[];
  showResults: boolean;

  constructor(private route: ActivatedRoute, private hwsbotService: HwsBotService) {}

  search(searchString: string) {
    this.showResults = false;
    this.route.params
      .switchMap((params: Params) => this.hwsbotService.getEbayItems(searchString))
      .subscribe(itemList => {
        this.itemList = itemList.item;
        this.showResults = true;
      })


  }
}
