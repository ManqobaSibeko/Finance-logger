import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplates.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice("yoshi", "webs", 250);
docTwo = new Payment("yoshi", "webs", 250);
docs.push(docOne);
docs.push(docTwo);
// list template instance
const form = document.querySelector(".new-item-form");
// inputs 
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
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
