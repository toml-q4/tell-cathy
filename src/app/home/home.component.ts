import { Component, OnInit } from '@angular/core';
import { NoteService } from "app/note.service";
import { NoteDetails } from "app/note-details/models/note-details";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noteDetails: NoteDetails;
  constructor(private noteService: NoteService,
    private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.noteService.create()
      .subscribe(response => {
        this.noteDetails = response;
        this.router.navigateByUrl(`/note/${this.noteDetails.id}`);
      });
  }
}
