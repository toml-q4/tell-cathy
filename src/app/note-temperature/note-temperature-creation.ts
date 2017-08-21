export class NoteTemperatureCreation {
    public amount: number;
    public unit: string;
    public takenDate: string;

    constructor(){
        this.takenDate = new Date().toLocaleString();
    }
}