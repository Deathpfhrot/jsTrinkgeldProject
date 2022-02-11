let bill = document.getElementById('bill')
let people = document.getElementById('people')
let service = document.getElementById('service')
let output = document.getElementById('output')
let noEntry = document.getElementById('noEntry')

let trinkgeld = document.getElementById('trinkgeld')
let gesamtBetrag = document.getElementById('gesamtBetrag')
let preisProPerson = document.getElementById('preisProPerson')

calc = () =>{
    
    switch(true){

        case service.value == "1":
            output.innerHTML = "<h2>Preis Pro Person beträgt: " + bill.value / people.value + "€" + "<br>" +
            "Das Trinkgeld beträgt: " + bill.value / 100 * 1.5 + "€" + "<br>" +
            "Die Gesamtsumme beträgt: " + ((bill.value / people.value) + (bill.value/100*1.5)) + "€</h2>"
            break;

        case service.value == "2":
            output.innerHTML = "<h2>Preis Pro Person beträgt: " + bill.value / people.value + "€" + "<br>" +
            "Das Trinkgeld beträgt: " + bill.value / 100 * 2 + "€" + "<br>" +
            "Die Gesamtsumme beträgt: " + ((bill.value / people.value) + (bill.value/100*2)) + "€</h2>"
            break;

        case service.value == "3":
            output.innerHTML = "<h2>Preis Pro Person beträgt: " + bill.value / people.value + "€" + "<br>" +
            "Das Trinkgeld beträgt: " + bill.value / 100 * 2.5 + "€"
            + "<br>" + "Die Gesamtsumme beträgt: " + ((bill.value / people.value) + (bill.value/100*2.5)) + "€</h2>"
            break;

        default:
            output.innerHTML = "<h2>Du musst einen service auswählen</h2>"
            break;
        } 
    }