let bill = document.getElementById('bill')
let people = document.getElementById('people')
let service = document.getElementById('service')

let output = document.getElementById('output')



calc = () =>{
    

    switch(true){


        case service.value == "1":
            output.innerHTML = "<h2>Das Trinkgeld beträgt: " + Number.parseFloat(bill.value / 100 * 2).toFixed(2) + "€" + "<br>" 
            +
            "Die Gesamtsumme beträgt: " + Number.parseFloat(bill.value * 1 + (bill.value / 100 * 2)).toFixed(2) + "€"
            +
            "<h2>Preis Pro Person beträgt: " + Number.parseFloat(bill.value / people.value + (bill.value / 100 * 2)).toFixed(2) + "€" + "<br></h2>"
            break;
    
        case service.value == "2":
            output.innerHTML = "<h2>Das Trinkgeld beträgt: " + Number.parseFloat(bill.value / 100 * 10).toFixed(2) + "€" + "<br>" 
            +
            "Die Gesamtsumme beträgt: " + Number.parseFloat(bill.value * 1 + (bill.value / 100 * 10)).toFixed(2) + "€"
            +
            "<h2>Preis Pro Person beträgt: " + Number.parseFloat(bill.value / people.value + (bill.value / 100 * 10)).toFixed(2) + "€" + "<br></h2>"
            break;
        case service.value == "3":
            output.innerHTML = "<h2>Das Trinkgeld beträgt: " + Number.parseFloat(bill.value / 100 * 20).toFixed(2) + "€" + "<br>" 
            +
            "Die Gesamtsumme beträgt: " + Number.parseFloat(bill.value * 1 + (bill.value / 100 * 20)).toFixed(2) + "€"
            +
            "<h2>Preis Pro Person beträgt: " + Number.parseFloat(bill.value / people.value + (bill.value / 100 * 20)).toFixed(2) + "€" + "<br></h2>"
            break;

        default:
            output.innerHTML = "<h2>Du musst einen service auswählen</h2>"
            break;
        } 
    }