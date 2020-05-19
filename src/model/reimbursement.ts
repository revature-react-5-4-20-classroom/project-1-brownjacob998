export class Reimbursement {
    reimID: number;
    author: number;
    amount: number;
    dateSubmitted: number;
    dateResolved: number;
    description: string;
    resolver: number;
    status: number;
    type: number;
    
    constructor(
        reimID: number,
        author: number,
        amount: number,
        dateSubmitted: number,
        dateResolved: number,
        description: string,
        resolver: number,
        status: number,
        type: number,) 
        {
            this.reimID = reimID
            this.author = author
            this.dateResolved = dateResolved
            this.dateSubmitted = dateSubmitted
            this.amount = amount
            this.description = description
            this.resolver = resolver
            this.status = status
            this.type = type
    }
}

export class Type {
    typeID: number;
    type: string;

    constructor (typeID:number, type:string) {
        this.typeID = typeID
        this.type = type
    }
}

export class Status {
    statusID: number;
    status: string;

    constructor (statusID:number, status:string) {
        this.statusID = statusID
        this.status = status
    }
}