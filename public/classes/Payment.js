// class all classes are public by default
export class Payment {
    // readonly client:string;
    // private details:string;
    // public amount:number;
    // constructor(c:string,d:string,a:number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return ` ${this.recepient} is owed R${this.amount} for ${this.details}`;
    }
}
