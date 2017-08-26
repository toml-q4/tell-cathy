import { NoteEntry } from 'app/note-details/models/note-entry';

export class NoteDetails {
    public id: string;
    public email: string;
    public entries: Array<NoteEntry>;
}