import { Injectable } from '@angular/core';
import { TrHttpService } from 'app/tr-http.service';
import { EntryType } from 'app/shared/enum.entry-type';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntryService {
  constructor(private http: TrHttpService) { }

  createMedicine(noteId: string, medicineName: string, medicineDosage: string) {
    return this.http.post(`/notes/${noteId}/medicines`, { name: medicineName, dosage: medicineDosage });
  }

  createTemperature(noteId: string, takenDate: string, amount: number) {
    return this.http.post(`/notes/${noteId}/temperatures`,
      { takenDate: takenDate, value: amount, isFahrenheit: false });
  }

  createSymptom(noteId: string, takenDate: string, name: string, description: string) {
    return this.http.post(`/notes/${noteId}/symptoms`,
      { takenDate: takenDate, name: name, description: description });
  }

  delete(noteId: string, entryType: EntryType, entryId: string) {
    if (entryType === EntryType.Symptom) {
      return this.http.delete(`/notes/${noteId}/symptoms/${entryId}`);
    }
    else if (entryType === EntryType.Temperature) {
      return this.http.delete(`/notes/${noteId}/temperatures/${entryId}`);
    }

    return Observable.of(null);
  }
}
