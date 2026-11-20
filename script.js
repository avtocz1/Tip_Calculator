const bill = document.getElementById("bill-input");
const inputs = document.querySelectorAll(".input")
const peopleAmount = document.getElementById("amount-of-people");
const customTip = document.getElementById("custom-tip");
const tipBtns = document.querySelectorAll("#btn");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const resetBtn = document.getElementById("reset")

const form = document.forms

let fetchedBill = 0;
let fetchedNumberOfPeople = 0;
let fetchedTip = 0;

bill.addEventListener("input", billProcessing)

peopleAmount.addEventListener("input", PeopleProcessing)
    
tipBtns.forEach((b) => {
    b.addEventListener("click", tipProcessing)
})

customTip.addEventListener("input", customTipProcessing)

function billProcessing() {
    fetchedBill = Number(bill.value)
    calculation()
}

function PeopleProcessing() {
    fetchedNumberOfPeople = Number(peopleAmount.value)
    calculation()
}

function tipProcessing(e) {
    fetchedTip = parseInt(e.target.textContent)
    calculation()
}

function customTipProcessing() {
    fetchedTip = customTip.value
    calculation()
}

function calculation() {
    const datas = []
    
    datas.push(fetchedBill, fetchedNumberOfPeople, fetchedTip)
    resetBtn.disabled = false

    resetBtn.addEventListener("click", function() {
        inputs.forEach((el) => {
            inputs.textContent = ""
        })
    })
    
    if(!datas.includes(0)){
        let calculatedTip = fetchedTip / 100;
        let totalTip = fetchedBill * calculatedTip;
        let tipAmount = totalTip / fetchedNumberOfPeople
        let totalPersonOperation1 = (fetchedBill + totalTip) / fetchedNumberOfPeople
        
        if(isFinite(tipAmount)){
            tipResult.textContent = `$${tipAmount.toFixed(2)}`
            totalResult.textContent = `$${totalPersonOperation1.toFixed(2)}`
        }else{
            tipResult.textContent = "$0.00"
        }
    }
}