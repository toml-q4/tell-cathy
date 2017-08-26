export enum EntryType {
    Temperature = 10
}
export class NoteEntry {
    public name: string;
    public description: string;
    public rachelSense: string;
    public takenDate: string;
    public entryType: EntryType;
}