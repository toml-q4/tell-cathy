import { NoteService } from './../note.service';
import { EntryService } from './../entry.service';
import { NoteTemperatureCreation } from './note-temperature-creation';
import { Component, OnInit } from '@angular/core';
import { EntryType } from 'app/shared/enum.entry-type';
import { NoteEntry } from 'app/note-details/models/note-entry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-temperature',
  templateUrl: './note-temperature.component.html',
  styleUrls: ['./note-temperature.component.css']
})
export class NoteTemperatureComponent implements OnInit {
  model = new NoteTemperatureCreation();
  noteId: string;
  lastRecord: NoteEntry;
  constructor(private router: Router,
    private noteService: NoteService,
    private entryService: EntryService) {
  }

  ngOnInit() {
    this.noteId = this.noteService.note.id;
    this.lastRecord = this.noteService.getLastEntry(EntryType.Temperature);
    if (this.lastRecord === undefined) {
      this.lastRecord = new NoteEntry();
    }
  }
  create() {
    this.entryService.createTemperature(this.noteId, this.model.takenDate, this.model.amount)
      .subscribe(response => {
        this.router.navigateByUrl(`/note/${this.noteId}`);
      });
  }

  decreaseAmount() {
    this.model.amount -= 0.1;
  }
  increaseAmount() {
    this.model.amount += 0.1;
  }
}