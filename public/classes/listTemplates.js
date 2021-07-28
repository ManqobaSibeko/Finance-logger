export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerHTML = item.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
    1. register a list container(ul) in the constructor
    2. creates a render method to render q new "li" to the container
    --accepts arg : invoices or payment, a heading , a position
    -- creat the html template (li, h4 p)
    --add the "li"template to the start/end of the list
*/ 
