import { Pipe, PipeTransform } from '@angular/core';
import { EntryType } from 'app/shared/enum.entry-type';

@Pipe({
  name: 'noteUnit'
})
export class NoteUnitPipe implements PipeTransform {

  transform(value: EntryType, args?: any): any {
    if (value === EntryType.Temperature) { return '&#8451'; }
    return '';
  }

}
