const ratings = document.querySelectorAll(".ratings span");
const rating_section = document.querySelector(".rating_section");
const submit_btn = document.querySelector(".submit_btn");
const thank_section = document.querySelector(".thank_section");
const rate = document.querySelector("#rate");

let rate_point = null;

ratings.forEach((ratings) => {
  ratings.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const rate_value = e.target;
    console.log(e);
    rate_value.classList.add("checked");
    rate_point = e.target.innerText;
  });
});''

submit_btn.addEventListener("click", (e) => {
  if (rate_point) {
    rate.innerText = rate_point;
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
  }
});
