const bill = document.querySelector("#bill");
const tip_percent = document.querySelectorAll(".tip-btns button");
const button_custom = document.querySelector("#custom");
const input_people = document.querySelector("#people");
const tip_amount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#total");
const reset_button = document.querySelector("#resetBtn");

tip_percent.forEach((p) => {
  p.addEventListener("click", (e) => {
    let percent = e.target.innerText;
    percent = percent.substr(0, percent.length - 1);

    if (bill.value === "") return reset();
    if (input_people.value === "") return (input_people.value = 1);

    calcTip(parseFloat(bill.value), percent, parseInt(input_people.value));
  });
});

button_custom.addEventListener("blur", (e) => {
  let valor = e.target.value;
  if (bill.value === "") return;
  if (input_people.value === "") return (input_people.value = 1);

  calcTip(
    parseFloat(bill.value),
    parseFloat(valor),
    parseInt(input_people.value)
  );
});

function calcTip(bill, tip_percent, input_people) {
  let tipAmount = (bill * (tip_percent / 100)) / input_people;
  let tipAmount_value = Math.floor(tipAmount * 100) / 100;
  tipAmount_value = tipAmount_value.toFixed(2);
  let total = (tipAmount_value * input_people + bill) / input_people;
  total = total.toFixed(2);

  tip_amount.innerText = `$${tipAmount_value}`;
  totalAmount.innerText = `$${total}`;
}

reset_button.addEventListener("click", reset);

function reset() {
  tip_amount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  bill.value = "";
  input_people.value = "";
  button_custom.value = "";
}
