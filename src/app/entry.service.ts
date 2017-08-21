import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntryService {
  backendDomain = 'http://localhost:59609';
  constructor(private http: Http) { }
 
  private convertToCelsius(amountInFahrenheit: number) {
    return (amountInFahrenheit - 32) * 5 / 9;
  }
  createTemperature(noteId: string, takenDate: string, amount: number, isCelsius: boolean) {
    if (!isCelsius) {
      amount = this.convertToCelsius(amount);
    }

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.backendDomain}/api/symptoms`, { noteId: noteId, takenDate: takenDate, temperatureInCelsius: amount }, options)      
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Unknown error.`;
    if (error.status === 404) {
      msg = 'Note is not found.';
    }

    return Observable.throw(msg);
  }
}
