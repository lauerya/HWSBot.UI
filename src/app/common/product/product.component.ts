import {Component, Input, OnInit} from '@angular/core';
import {HwsBotService} from '../services/hwsbot-service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {

  }
}
