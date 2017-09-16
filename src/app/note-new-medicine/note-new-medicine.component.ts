import { Component, OnInit } from '@angular/core';
import { NoteNewMedicineCreation } from 'app/note-new-medicine/note-new-medicine-creation';

@Component({
  selector: 'note-new-medicine',
  templateUrl: './note-new-medicine.component.html',
  styleUrls: ['./note-new-medicine.component.css']
})
export class NoteNewMedicineComponent implements OnInit {
  model = new NoteNewMedicineCreation();
  constructor() { }

  ngOnInit() {
  }

  create() {
    alert(this.model.medicineName + ' -- ' + this.model.medicineDosage);
  }

}
