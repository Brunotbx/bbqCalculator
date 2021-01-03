let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result")

function calculate() {
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let amtBeef = beefPP(duration) * adults + (beefPP(duration)/2 * kids);
    let amtSoda = sodaPP(duration) * adults + (sodaPP(duration)/2 * kids);
    let amtBeer = beerPP(duration) * adults;

    result.innerHTML = `<p>${amtBeef} Grams of beef</p>`
    result.innerHTML += `<p>${amtSoda} Milliliters of soda</p>`
    result.innerHTML += `<p>${amtBeer} Milliliters of beer</p>`
}

function beefPP (duration){
    if (duration >=6){
        return 650;
    }else {
        return 400;
    }
}

function sodaPP (duration){
    if (duration >=6){
        return 2000;
    }else {
        return 1200;
    }
}

function beerPP (duration){
    if (duration >=6){
        return 1500;
    }else {
        return 1000;
    }
}