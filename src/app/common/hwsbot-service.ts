import {HttpClient} from "./http-client";
import {Injectable} from "@angular/core";

@Injectable()
 export class HwsBotService {
  constructor(private httpClient: HttpClient) {}

  getItemQuote(item: String) {
    return this.httpClient
      .post(`http://localhost/api/Hws/V1/Reddit/ItemDetail/`, {item})
      .map(this.httpClient.extractData)
      .catch(this.httpClient.handleError);
  }
}
