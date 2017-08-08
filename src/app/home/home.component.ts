import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  createNote() {
    this.noteService.create().subscribe(response => {
      alert('created! now redirect to it');
    })
  }

}
