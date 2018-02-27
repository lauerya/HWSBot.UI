import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() item: Item;
  hasText = false;
  postText: string;
  linkList: string[] = [];
  urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

  constructor() {
  }

  ngOnInit() {
    if (this.item.Text) {
      this.hasText = true;
      this.postText = this.linkify(this.item.Text);
      this.populateLinkList();
    }
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  openUser(user: string) {
    window.open(`https://www.reddit.com/user/${user}`, '_blank')
  }

  messageUser(user: string) {
    window.open(`https://www.reddit.com/message/compose/?to=${user}`, '_blank');
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
