import { Invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplates.js'
import { Payment} from './classes/Payment.js'
import { HasFormatter} from "./interfaces/HasFormatter"

let docOne : HasFormatter
let docTwo : HasFormatter


let docs: HasFormatter[] = []



docOne = new Invoice("yoshi","webs",250)
docTwo = new Payment("yoshi","webs",250)
docs.push(docOne)
docs.push(docTwo)

interface isperson {
    name:string,
    age:number;
    speak(a:string):void;
    spend(a:number):number
}


// list template instance



const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs 

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)


form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()

    let doc:HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value,details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(toFrom.value,details.value,amount.valueAsNumber)
    }
    list.render(doc,type.value,'end')
})





// const oneIn = new Invoice("maori","for the website",600)
// const twoIn = new Invoice("mpeter","for the grocery",560)


// let invoices: Invoice[] = []

// invoices.push(oneIn)
// invoices.push(twoIn)

// invoices.forEach(inv=>{

// })

// console.log(oneIn.format())
// console.log(twoIn.format())
// console.log(invoices)