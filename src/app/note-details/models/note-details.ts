export class NoteDetails {
    constructor(
        public id: number,
        public birthday: string,
        public isMale: boolean,
        public takenDate: string,
        public takenDateAgo: string,
        public weightInGrams: number
    ) { }
}