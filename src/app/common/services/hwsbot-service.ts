import {HttpClient} from "../http-client";
import {Injectable} from "@angular/core";

@Injectable()
 export class HwsBotService {
  constructor(private httpClient: HttpClient) {}

  getItemQuote(item: string) {
    return this.httpClient
      .post(`http://localhost/api/Hws/V1/Reddit/ItemDetail/`, {item})
      .map(this.httpClient.extractData)
      .catch(this.httpClient.handleError);
  }
  getEbayItems(item: string) {
    return this.httpClient
      .post(`http://localhost/api/Hws/V1/Ebay/CompletedItems/`, {item})
      .map(this.httpClient.extractData)
      .catch(this.httpClient.handleError);
  }
  getRecentProducts() {
    return this.httpClient
    .get(`http://localhost/api/Hws/V1/Product/1`)
    .map(this.httpClient.extractData)
    .catch(this.httpClient.handleError);  }
}
