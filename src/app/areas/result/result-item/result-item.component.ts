import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() itemList;
  constructor() { }

  ngOnInit() {
  }

}
