let pageViews = document.querySelector(".page-views span");
let precoFixo = document.querySelector(".pricefix");
let duracao = document.querySelector(".month");
let range = document.querySelector(".myrange");
let check = document.querySelector(".switch input");
let switcher =  document.querySelector(".switch")

let preco = parseInt(precoFixo.textContent);
console.log(preco);
range.addEventListener("input", (e) => {
    console.log(e);
});

switcher.onclick = function(){
    check.checked
}

// function setPrices() {

// }
