import { NoteService } from './../note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from './../entry.service';
import { NoteTemperatureCreation } from './note-temperature-creation';
import { Component, OnInit } from '@angular/core';
import { EntryType } from "app/shared/enum.entry-type";
import { NoteEntry } from "app/note-details/models/note-entry";

@Component({
  selector: 'app-note-temperature',
  templateUrl: './note-temperature.component.html',
  styleUrls: ['./note-temperature.component.css']
})
export class NoteTemperatureComponent implements OnInit {
  model = new NoteTemperatureCreation();
  noteId: string;
  lastRecord: NoteEntry;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private entryService: EntryService) {
  }


  ngOnInit() {
    this.model.amount = 37.0;
    this.noteId = this.noteService.note.id;
    this.lastRecord = this.noteService.getLastEntry(EntryType.Temperature);
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