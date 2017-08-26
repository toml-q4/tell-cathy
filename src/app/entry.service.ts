import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntryService {
  backendDomain = 'http://localhost:59609';
  constructor(private http: Http) { }

  createTemperature(noteId: string, takenDate: string, amount: number, isCelsius: boolean) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.backendDomain}/api/temperatures`,
                          { noteId: noteId, takenDate: takenDate, value: amount, isFahrenheit: !isCelsius },
                          options)
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Unknown error.`;
    if (error.status === 404) {
      msg = 'Not Found';
    }

    return Observable.throw(msg);
  }
}
