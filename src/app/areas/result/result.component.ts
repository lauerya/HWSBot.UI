import {Component, Input, OnInit} from '@angular/core';
import {SortPipe} from "./sort.pipe";

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  @Input() itemList: Item[];
  modalOpen = false;
  constructor() { }

  ngOnInit() {
  }
  openLink(link: string) {
    window.open(link, '_blank');
    this.modalOpen = !this.modalOpen;
  }
  openUser(user: string){
    window.open(`https://www.reddit.com/user/${user}`, '_blank')
  }
}
