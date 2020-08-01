export class Message {
    private _studentId: number;
    public get studentId(): number {
        return this._studentId;
    }
    public set studentId(studentId: number) {
        this._studentId = studentId;
    }

    private _text: string;
    public get text(): string {
        return this._text;
    }
    public set text(text: string) {
        this._text = text;
    }

    private _sentFromUniversity: boolean;
    public get sentFromUniversity(): boolean {
        return this._sentFromUniversity;
    }
    public set sentFromUniversity(sentFromUniversity: boolean) {
        this._sentFromUniversity = sentFromUniversity;
    }

    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(date: Date) {
        this._date = date;
    }

    constructor(text, studentId, sentFromUniversity?) {
        this.text = text;
        this.studentId = studentId;
        this.sentFromUniversity = sentFromUniversity || true;
        this.date = new Date();
    }
}
