import {HttpClient} from "./http-client";
import {Injectable} from "@angular/core";
import { SearchComponent } from '../search.component'
/**
 * Created by ryanlauer on 6/8/17.
 */
@Injectable
export class HwsBotService {
   constructor (private httpClient: HttpClient) {}

   getItemQuote(item: String) {
     return this.httpClient
       .post(`${apis.hwsApi}/search-item`, {item})
       .map(this.httpClient.extractData)
       .catch(this.httpClient.handleError);
   }
}
