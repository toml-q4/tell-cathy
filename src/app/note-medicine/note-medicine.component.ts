import { Component, OnInit } from '@angular/core';
import { NoteService } from 'app/note.service';
import { Medicine } from 'app/note-medicine/medicine';

@Component({
  selector: 'app-note-medicine',
  templateUrl: './note-medicine.component.html',
  styleUrls: ['./note-medicine.component.css']
})
export class NoteMedicineComponent implements OnInit {
  noteId: string;
  medicineList: Medicine[];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteId = this.noteService.note.id;

  }
  create() { }
}
