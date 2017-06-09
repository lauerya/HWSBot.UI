/**
 * Created by user on 6/2/17.
 */
import {Component} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { HwsBotService } from './common/hwsbot-service'
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'search';
  value= ' ';
  itemName: String;
  itemPrice: String;
  itemDate: Date;

  constructor(private route: ActivatedRoute, private hwsbotService: HwsBotService) {}

  Search(searchString: string) {
    this.route.params
      .switchMap((params: Params) => this.hwsbotService.getItemQuote(params['searchString']))
      .subscribe(item => {
        this.itemName = item.Name;
        this.itemPrice = item.Price;
        this.itemDate = item.Date;
      })


  }
}
