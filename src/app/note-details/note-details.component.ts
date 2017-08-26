import { element } from 'protractor';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { NoteDetails } from 'app/note-details/models/note-details';
import { ActivatedRoute } from '@angular/router';
import { EntryType } from 'app/note-details/models/note-entry';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  noteId: number;
  noteDetails = new NoteDetails();
  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit() {
    if (!this.noteDetails.id) {
      this.activatedRoute.params
        .map(params => params['noteId'])
        .do(noteId => this.noteId = noteId)
        .subscribe(noteId => this.getNoteById());
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
      })
  }
}

