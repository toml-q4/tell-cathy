import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrHttpService {
  backendDomain = 'http://localhost:59609/api';

  constructor(private http: Http) { }
  post(url: string, body: any): Observable<Response> {
    return this.http.post(`${this.backendDomain}${url}`, body, this.getOptions())
      .catch(this.handleError);
  }

  delete(url: string): Observable<Response> {
    return this.http.delete(`${this.backendDomain}${url}`, this.getOptions())
      .catch(this.handleError);
  }

  getOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  private handleError(error: Response) {
    let msg = `Unknown error.`;
    if (error.status === 404) {
      msg = 'Not Found';
    }

    return Observable.throw(msg);
  }
}
