import { EntryType } from "app/shared/enum.entry-type";

export class NoteEntry {
    public name: string;
    public description: string;
    public rachelSense: string;
    public takenDate: string;
    public entryType: EntryType;
}