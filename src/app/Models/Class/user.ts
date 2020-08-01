import { Student } from "./student";

export enum userTypeEnum {student, teacher}; 
export class User {

    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }

    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }

    private _isAdmin : boolean;
    public get isAdmin() : boolean {
        return this._isAdmin;
    }
    public set isAdmin(isAdmin : boolean) {
        this._isAdmin = isAdmin;
    }
    
    constructor(email: string, password: string, isAdmin?: boolean) {
        this._email = email;
        this.password = password;
        this.isAdmin = isAdmin || false;
    }

}
