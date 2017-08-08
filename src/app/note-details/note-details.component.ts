import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { NoteDetails } from "app/note-details/models/note-details";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  noteId: number;
  noteDetails: NoteDetails;
  constructor(private route: ActivatedRoute, private noteService: NoteService) {}

  ngOnInit() {
    if (!this.noteDetails) {
      this.route.params
        .map(params => params['id'])
        .do(noteId => this.noteId = noteId)
        .subscribe(noteId => this.getNoteById());
    }
  }

  private getNoteById() {
    this.noteService.getById(this.noteId, false).subscribe(noteDetails => {
        this.noteDetails = noteDetails;
      },
      errorMessage => {
        alert(errorMessage);
      })
  }
}

