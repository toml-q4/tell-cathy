import { NoteService } from 'app/note.service';
import { Component, OnInit } from '@angular/core';
import { TemperatureIndicator, NoteDetails } from 'app/note-details/models/note-details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'note-nav',
  templateUrl: './note-nav.component.html',
  styleUrls: ['./note-nav.component.css']
})
export class NoteNavComponent implements OnInit {
  noteId: string;
  temperatureUp = false;
  temperatureDown = false;
  temperatureSame = false;
  temperatureUnknown = false;

  constructor(private route: ActivatedRoute, private noteService: NoteService) { 
    this.noteService.note$.subscribe(note => this.setTemperatureIndicator(note));
  }

  ngOnInit() {
  }

  private setTemperatureIndicator(note: NoteDetails) {
    if (note){
      if (note.temperatureIndicator === TemperatureIndicator.up) {
        this.temperatureUp = true;
      }
      else if (note.temperatureIndicator === TemperatureIndicator.down) {
        this.temperatureDown = true;
      }
      else if (note.temperatureIndicator === TemperatureIndicator.same) {
        this.temperatureSame = true;
      }
      else {
        this.temperatureUnknown = true;
      }
    }
  }
}
