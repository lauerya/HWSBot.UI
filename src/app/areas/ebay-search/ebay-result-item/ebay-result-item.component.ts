import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ebay-result-item',
  templateUrl: './ebay-result-item.component.html',
  styleUrls: ['./ebay-result-item.component.scss']
})
export class EbayResultItemComponent implements OnInit {
  @Input() item: EbayItem;
  hasText = false;
  postText: string;
  linkList: string[] = [];
  urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

  constructor() {
  }

  ngOnInit() {
    console.log(this.item);
    if (this.item.title) {
      this.hasText = true;
    }
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  linkify(text) {
    return text.replace(this.urlRegex, function (url) {
      return '<a style="color: black" href="' + url + '">' + url + '</a>';
    });
  };
  populateLinkList() {
    var match = this.urlRegex.exec(this.postText);
    var i = 0;
    while(match.length > i){
      this.linkList.push(match[i]);
      i++;
    }
  }
}

