import { Component, OnInit } from '@angular/core';
import { EntryService } from 'app/entry.service';
import { NoteSymptomCreation } from 'app/note-symptom/note-symptom-creation';
import { Router } from '@angular/router';
import { NoteService } from 'app/note.service';
import { NoteEntry } from 'app/note-details/models/note-entry';
import { EntryType } from 'app/shared/enum.entry-type';

@Component({
  selector: 'note-symptom',
  templateUrl: './note-symptom.component.html',
  styleUrls: ['./note-symptom.component.css']
})
export class NoteSymptomComponent implements OnInit {
  model = new NoteSymptomCreation();
  noteId: string;
  lastRecord: NoteEntry;
  constructor(private noteService: NoteService, private entryService: EntryService, private router: Router) { }

  ngOnInit() {
    this.noteId = this.noteService.note.id;
    this.lastRecord = this.noteService.getLastEntry(EntryType.Symptom);
  }
  create() {
    this.entryService.createSymptom(this.noteId, this.model.takenDate, this.model.name, this.model.description)
      .subscribe(response => { this.router.navigateByUrl(`/note/${this.noteId}`); });
    // this.entryService.createTemperature(this.noteId, this.model.takenDate, this.model.amount)
    //   .subscribe(response => {
    //     this.router.navigateByUrl(`/note/${this.noteId}`);
    //   });
  }
}
