import { Component, OnInit } from '@angular/core';
import { HwsBotService } from '../../common/services/hwsbot-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected recentProducts: Product[] = [];
  recentProductsSubscription: Subscription;

  constructor(private hwsService: HwsBotService) { }

  ngOnInit() {
    //this.recentProductsSubscription = this.hwsService.getRecentProducts()
    //.subscribe(products => this.recentProducts = products)
  }

}

