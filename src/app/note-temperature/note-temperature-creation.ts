export class NoteTemperatureCreation {
    public amount: number;
    public takenDate: string;

    constructor() {
        this.amount = 37.0;
        this.takenDate = new Date().toLocaleString();
    }
}