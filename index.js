const billInput = document.querySelector(".bill-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".box");
const genbill = document.querySelector(".gen");


billInput.addEventListener("input", billInputfun);
genbill.addEventListener("click", genbillfun);

tipPerPerson.innerHTML = "₹" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "₹" + (0.0).toFixed(2);
billInput.value = "0";


function billInputfun() {
  billValue = parseFloat(billInput.value);
  
}




let billValue = 0.0;
let tipValue = 0.15;

tips.forEach(function (val) {
    val.addEventListener("click", handleclick);
});

function handleclick(event) {
    tips.forEach(function (val) {
    if (event.target.innerHTML == val.innerHTML) {
        tipValue = parseFloat(val.innerHTML) / 100;
    }
});

}
function genbillfun() {

if (billInput.value !== "0" && count > 0 ) {

    let tipAmount = (billValue + tipValue) / count;
    let total = (billValue * tipAmount) / count;
    tipPerPerson.innerHTML = "₹" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "₹" + total.toFixed(2);
}

}

let counter = document.getElementById("counter");
let increament = document.getElementsByClassName("incr")[0];
let decreament = document.getElementsByClassName("decr")[0];
let reset = document.getElementsByClassName("reset")[0];

let count = 0;
increament.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
});
decreament.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
});
reset.addEventListener("click", function () {
  if (count < 0 || count > 0) {
    count = 0;
  }

counter.innerHTML = count;
billInput.value = count;
  totalPerPerson.innerHTML='₹0.00';
  tipPerPerson.innerHTML='₹0.00';

  
});

