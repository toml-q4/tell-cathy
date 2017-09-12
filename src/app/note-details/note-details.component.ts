import { element } from 'protractor';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { NoteDetails } from 'app/note-details/models/note-details';
import { ActivatedRoute } from '@angular/router';
import { EntryType } from 'app/shared/enum.entry-type';
import { EntryService } from 'app/entry.service';
import { NoteEntry } from 'app/note-details/models/note-entry';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  publicUrl: string;
  noteId: string;
  noteDetails = new NoteDetails();
  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private entryService: EntryService) { }

  ngOnInit() {
    if (!this.noteDetails.id) {
      this.activatedRoute.params
        .map(params => params['noteId'])
        .do(noteId => this.noteId = noteId)
        .subscribe(noteId => this.getNoteById());
    }
  }

  delete(entry: NoteEntry) {
    if (confirm('Are you sure that you want to delete this entry? This action cannot be undone.')) {
      this.entryService.delete(this.noteId, entry.entryType, entry.id).subscribe(() => this.getNoteById());
    }
  }

  private getNoteById() {
    this.noteService.getById(this.noteId).subscribe(noteDetails => {
      // this could be a pipe for entry type
      noteDetails.entries.forEach(element => {
        if (element.entryType === EntryType.Temperature) {
          element.description = 'Body Temperature';
        }
      });
      this.noteDetails = noteDetails;
    },
      errorMessage => {
        alert(errorMessage);
      });
  }
}

