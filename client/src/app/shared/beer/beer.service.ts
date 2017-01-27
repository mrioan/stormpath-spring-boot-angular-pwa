import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { StormpathConfiguration } from 'angular-stormpath';

@Injectable()
export class BeerService {

  constructor(public http: Http, public config: StormpathConfiguration) {}

  getAll(): Observable<any> {
    let options = new RequestOptions({ withCredentials: true });

    return this.http.get(this.config.endpointPrefix + '/good-beers')
      .map((response: Response) => response.json());
  }

}
