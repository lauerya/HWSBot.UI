import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  private static setCommonHeaders(headers: Headers) {
    const value = `BEARER ${localStorage.getItem('id_token')}`;
    headers.append('Authorization', value);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }

  get(url) {
    const headers = new Headers();
    HttpClient.setCommonHeaders(headers);

    return this.http.get(url, {
      headers: headers
    });
  }

  public extractData(res: Response){
    return res.json();
  }

  public handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }

  post(url, data) {
    const headers = new Headers();
    HttpClient.setCommonHeaders(headers);

    return this.http.post(url, data, {
      headers: headers
    });
  }

  patch(url, data) {
    const headers = new Headers();
    HttpClient.setCommonHeaders(headers);

    return this.http.patch(url, data, {
      headers: headers
    });
  }
}
