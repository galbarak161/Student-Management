import { User } from "./user";

export class Student extends User {


    private _studentId: number;
    public get studentId(): number {
        return this._studentId;
    }
    public set studentId(studentId: number) {
        this._studentId = studentId;
    }

    static addIdToStudentArr(students: Student[]) {
        for (let i = 0; i < students.length; i++) {
            students[i].studentId = i;
        }
        return students;
    }

    clone(student: Student) {
        this.name = student.name;
        this.course = student.course;
        this.grade = student.grade;
        this.birthday = student.birthday;
        this.picSrc = student.picSrc;
        this.email = student.email;
        this.password = student.password;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    private _course: string;
    public get course(): string {
        return this._course;
    }
    public set course(course: string) {
        this._course = course;
    }

    private _grade: number;
    public get grade(): number {
        return this._grade;
    }
    public set grade(grade: number) {
        this._grade = grade;
    }

    private _picSrc: string;
    public get picSrc(): string {
        return this._picSrc;
    }
    public set picSrc(picSrc: string) {
        this._picSrc = picSrc;
    }

    private _birthday: Date;
    public get birthday(): Date {
        return this._birthday;
    }
    public set birthday(birthday: Date) {
        this._birthday = birthday;
    }
    calculateAge(birthdayDate: string): number {
        let thisTime = new Date(birthdayDate).getTime();
        let ageDifMs = Date.now() - thisTime;
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor(name: string, course: string, grade: number, birthday: Date, user: User, picSrc?: string) {
        super(user.email, user.password, user.isAdmin);
        this._studentId = 0;
        this._name = name;
        this._course = course;
        this._grade = grade;
        this._birthday = birthday;
        this._picSrc = picSrc || "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450";
        this._selected = false;
    }

    //Card Project
    private _selected: boolean;
    public get selected(): boolean {
        return this._selected;
    }
    public set selected(selected: boolean) {
        this._selected = selected;
    }
    //Card Project
}

