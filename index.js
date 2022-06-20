const cnvrtBtn = document.getElementById("cnvrt-btn")
const pMeterFeet = document.getElementById("meter-feet")
const pLiterGallon = document.getElementById("liter-gallon")
const pKgLb = document.getElementById("kg-lb")

const meterFeetConv = 3.28
const literConv = 3.785
const gallonConv = 0.264172
const kgLbConv = 2.2


function convertVal(inpVal) {
    let meter = inpVal / meterFeetConv
    let feet = inpVal * meterFeetConv
    pMeterFeet.textContent = `${inpVal} meters = ${feet.toFixed(3)} feet | ${inpVal} feet = ${meter.toFixed(3)} meters`

    let liter = inpVal / literConv
    let gallon = inpVal * gallonConv
    pLiterGallon.textContent = `${inpVal} liters = ${gallon.toFixed(3)} gallons | ${inpVal} gallons = ${liter.toFixed(3)} liters`

    let kg = inpVal / kgLbConv
    let lb = inpVal * kgLbConv
    pKgLb.textContent = `${inpVal} kilograms = ${lb.toFixed(3)} pounds | ${inpVal} pounds = ${kg.toFixed(3)} kilograms`
}



cnvrtBtn.addEventListener("click", function() {
    let input = document.getElementById("input").value
    convertVal(input)
})