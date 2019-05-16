import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ebay-result',
  templateUrl: './ebay-result.component.html',
  styleUrls: ['./ebay-result.component.css']
})
export class EbayResultComponent implements OnInit {

  @Input() itemList: Item[];
  modalOpen = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.itemList);
  }

  openLink(link: string) {
    window.open(link, '_blank');
    this.modalOpen = !this.modalOpen;
  }

  openUser(user: string) {
    window.open(`https://www.reddit.com/user/${user}`, '_blank')
  }
}
