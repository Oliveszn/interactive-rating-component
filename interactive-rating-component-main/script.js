const submit = document.querySelector("#submit");
const btn = document.querySelectorAll(".radio-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const rating = document.querySelector(".rating");
const select = document.querySelector(".select");

for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", function () {
    let main = btn[i].value;
    select.textContent = `You selected ${main} out of 5`;
  });

submit.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
