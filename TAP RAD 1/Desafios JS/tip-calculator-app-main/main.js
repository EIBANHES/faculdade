const billAmount = document.querySelector("#bill");
const tipPercent = document.querySelectorAll(".tip-btns button");
const customPercent = document.querySelector("#custom");
const numberPerPeople = document.querySelector("#people");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#total");
const reset_button = document.querySelector("#resetBtn");

tipPercent.forEach((tipPercent) => {
  tipPercent.addEventListener("click", (e) => {
    let tipPercentValue = e.target.innerText;
    tipPercentValue = tipPercentValue.substr(0, tipPercentValue.length - 1);

    if (billAmount.value === "") return;
    if (numberPerPeople.value === "") return (numberPerPeople.value = 1);

    calcTip(
      parseFloat(billAmount.value),
      tipPercentValue,
      parseInt(numberPerPeople.value)
    );
  });
});

customPercent.addEventListener("blur", (e) => {
  if (billAmount.value === "") return;
  if (numberPerPeople.value === "") return (numberPerPeople.value = 1);

  calcTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberPerPeople.value)
  );
});

reset_button.addEventListener(("click"), reset);

function calcTip(bill, percent, number_people) {
  let tip_amount = (bill * (percent / 100)) / number_people;
  let tip_amount_value = Math.floor(tip_amount * 100) / 100;
  tip_amount_value = tip_amount_value.toFixed(2);
  let total_amount = (tip_amount_value * number_people + bill) / number_people;
  let total_amount_value = Math.floor(total_amount * 100) / 100;
  total_amount_value = total_amount_value.toFixed(2);

  tipAmount.innerHTML = `$${tip_amount_value}`;
  totalAmount.innerHTML = `$${total_amount_value}`;
}

function reset(){
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  numberPerPeople.value = "";
  billAmount.value="";
  customPercent.value="";
}