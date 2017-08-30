import { EntryType } from "app/shared/enum.entry-type";

export class NoteTemperatureCreation {
    public amount: number;
    public takenDate: string;
    private _entryType: EntryType = EntryType.Temperature;

    get entryType(): EntryType {
        return this._entryType;
    }

    constructor() {
        this.takenDate = new Date().toLocaleString();
    }
}