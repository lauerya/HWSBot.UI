/**
 * Created by user on 6/2/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = 'search';
  value='';

  onEnter(value:string) {this.value = value;}
}
