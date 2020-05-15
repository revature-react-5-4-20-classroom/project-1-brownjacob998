export class User {
    userID:number
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: number;

    constructor(id: number, username:string, password: string, first:string, last:string, email:string, role:number) {
        this.userID = id
        this.userName = username
        this.password = password
        this.firstName = first
        this.lastName = last
        this.email = email
        this.role = role
    }
}

export class Role {
    roleID: number;
    role: string;

    constructor(roleID:number, role:string) {
        this.roleID = roleID
        this.role = role
    }
}