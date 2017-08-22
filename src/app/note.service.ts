import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NoteDetails } from 'app/note-details/models/note-details';
@Injectable()
export class NoteService {
  note: NoteDetails;
  backendDomain = 'http://localhost:59609';
  constructor(private http: Http) { }

  getById(id: number) {
    let requestURL = `${this.backendDomain}/api/notes/${id}?withDetails=true`;
   
    return this.http.get(requestURL)
      .map((response: Response) => <NoteDetails>response.json())
      .catch(this.handleError);
  }

  create(email: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.backendDomain}/api/notes`, { email: email }, options)
      .map((response: Response) => <NoteDetails>response.json())
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