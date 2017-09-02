import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NoteDetails } from 'app/note-details/models/note-details';
import { EntryType } from 'app/shared/enum.entry-type';
import { NoteEntry } from 'app/note-details/models/note-entry';
@Injectable()
export class NoteService {
  note: NoteDetails;
  noteSource: Subject<NoteDetails> = new Subject<NoteDetails>();
  note$ = this.noteSource.asObservable();
  private backendDomain = 'http://localhost:59609';
  constructor(private http: Http) { }

  getLastEntry(type: EntryType) {
    let result: NoteEntry;
    if (this.note) {
      result = this.note.entries.find(function (element) {
        return element.entryType === EntryType.Temperature;
      });
    }

    return result;
  }

  getById(id: string) {
    const requestURL = `${this.backendDomain}/api/notes/${id}?withDetails=true`;
    return this.http.get(requestURL)
      .map((response: Response) => <NoteDetails>response.json())
      .do((data) => {
        this.noteSource.next(data);
        this.note = data;
      })
      .catch(this.handleError);
  }

  getCurrent() {
    return this.note;
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