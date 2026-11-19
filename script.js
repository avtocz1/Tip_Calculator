const bill = document.getElementById("bill-input");
const peopleAmount = document.getElementById("amount-of-people");
const customTip = document.getElementById("custom-tip");
const tipBtns = document.querySelectorAll("#btn");
const results = document.querySelectorAll("#result");

let fetchingBill;
let fetchingNumberOfPeople

const obj = {
    receivedBill: "",
    people: 0,
    tip: 0,
}


bill.addEventListener("blur", function(){
    fetchingBill = bill.value;
    obj.receivedBill = Number(fetchingBill);
})


peopleAmount.addEventListener("blur", function() {
    fetchingNumberOfPeople = peopleAmount.value;
    obj.people = Number(fetchingNumberOfPeople)
})

tipBtns.forEach((b) => {
    b.addEventListener("click", function(e) {
        obj.tip = e.target.textContent
    })
})

customTip.addEventListener("blur", function(){
    fetchingBill = customTip.value;
    obj.tip = Number(fetchingBill);
})
let number = obj.receivedBill
console.log(number)