import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { NoteDetails } from "app/note-details/models/note-details";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  noteId: number;
  noteDetails: NoteDetails;  
  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService) {}

  ngOnInit() {
    if (!this.noteDetails) {
      this.activatedRoute.params
        .map(params => params['noteId'])
        .do(noteId => this.noteId = noteId)
        .subscribe(noteId => this.getNoteById());
    }
  }

  private getNoteById() {
    this.noteService.getById(this.noteId).subscribe(noteDetails => {
        this.noteDetails = noteDetails;
      },
      errorMessage => {
        alert(errorMessage);
      })
  }
}

