import {Injectable} from '@angular/core';
import {Headers, Http, Jsonp, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Speaker} from '../speaker/speaker.model';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SpeakerListService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http, private jsonp: Jsonp) {
  }

  private USER_URL = 'https://api.randomuser.me';

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(number: string): Observable<Speaker[]> {
    let params: URLSearchParams = new URLSearchParams();
    let headers: Headers = new Headers({'Content-Type': 'application/json'});
    let options: RequestOptions = new RequestOptions({headers: headers});

    params.set('results', number);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(this.USER_URL, {search: params})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json().results;
    return body || {};
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

