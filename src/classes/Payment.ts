import { HasFormatter} from "../interfaces/HasFormatter"

// class all classes are public by default
export class Payment implements HasFormatter {
    // readonly client:string;
    // private details:string;
    // public amount:number;

    // constructor(c:string,d:string,a:number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }

    constructor(
    readonly recepient:string,
    private details:string,
    public amount:number
    ){}

    format(){
        return` ${this.recepient} is owed R${this.amount} for ${this.details}`
    }
}