import {Component} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { HwsBotService } from '../../common/hwsbot-service'
@Component({
  selector: 'search-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent {
  title = 'search';
  value= ' ';
  itemList: Item[];
  showResults: boolean;

  constructor(private route: ActivatedRoute, private hwsbotService: HwsBotService) {}

  search(searchString: string) {
    this.route.params
      .switchMap((params: Params) => this.hwsbotService.getItemQuote(searchString))
      .subscribe(itemList => {
        this.showResults = true;
        this.itemList = itemList;
      })


  }
}
