import { NoteEntry } from 'app/note-details/models/note-entry';

export enum TemperatureIndicator {
    up = 0,
    down = 1,
    same = 2,
    unknown = 3
}

export class NoteDetails {
    public id: string;
    public email: string;
    public entries: Array<NoteEntry>;
    public temperatureIndicator: TemperatureIndicator;
}