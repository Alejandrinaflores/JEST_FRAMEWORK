const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
let amount = euro * oneEuroIs.USD
return amount;
}

let oneDollarIs={
    "JPY": 135, 
    "EUR": 0.98, 
    "GBP": 0.83, 
}
function fromDollarToYen(dollar) {
    let amount = dollar * oneDollarIs.JPY
    return amount;
}

let oneYenIs={
     "GBP": 0.0061, 
}

function fromYenToPound(yen) {
    let amount = yen * oneYenIs.GBP
    return amount;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};