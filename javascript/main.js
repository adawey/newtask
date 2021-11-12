let vendor = document.querySelector("[name='vendor']"); //ni
let media = document.querySelector("[name='media']"); //n2
let spend = document.querySelector("[name='spend']"); //n3
let project = document.querySelector("[name='project']"); //4
let unlimited = document.querySelector(".unlimited");
let lifetime = document.querySelector(".lifetime");
let progress = document.querySelectorAll("progress");
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div ");
let divsArray = Array.from(divs);

//////////////////////////////////////
console.log(progress);
project.addEventListener("change", cheak);
function cheak() {
  let result = false;
  if (
    vendor.value !== "" &&
    media.value !== "" &&
    spend.value !== "" &&
    project.value !== ""
  ) {
    result = true;
  } else {
    result = false;
  }

  function calcUnlimtedAndLife() {
    let sum = 0;
    if (result !== false) {
      sum =
        parseInt(vendor.value) +
        parseInt(media.value) +
        parseInt(spend.value) +
        parseInt(project.value);
    }
    return sum;
  }
  let sum = calcUnlimtedAndLife();

  var unlimited_rewards = calcUnlimtedAndLife() * 1.1;
  var lifetime_rewards = calcUnlimtedAndLife() * 1.2;
  unlimited.textContent = Math.trunc(unlimited_rewards) + "$";
  lifetime.textContent = Math.trunc(lifetime_rewards) + "$";

  document
    .querySelector("[name='Brex']")
    .addEventListener("click", function (e) {
      progress[6].max = calcUnlimtedAndLife();
      progress[7].max = calcUnlimtedAndLife();
      progress[8].max = calcUnlimtedAndLife();
      progress[6].value = Math.trunc(unlimited_rewards);
      progress[7].value = Math.trunc(lifetime_rewards);
      let v = sum * 0.3;
      progress[8].value = Math.trunc(v);
      e.preventDefault();
    });
  document
    .querySelector("[name='Stripe']")
    .addEventListener("click", function (e) {
      progress[3].max = calcUnlimtedAndLife();
      progress[4].max = calcUnlimtedAndLife();
      progress[5].max = calcUnlimtedAndLife();
      progress[3].value = Math.trunc(unlimited_rewards);
      progress[4].value = Math.trunc(lifetime_rewards);
      let v = sum * 2.9;
      progress[5].value = Math.trunc(v);
      e.preventDefault();
    });
  document
    .querySelector("[name='Amex']")
    .addEventListener("click", function (e) {
      progress[0].max = calcUnlimtedAndLife();
      progress[1].max = calcUnlimtedAndLife();
      progress[2].max = calcUnlimtedAndLife();
      progress[0].value = Math.trunc(unlimited_rewards);
      progress[1].value = Math.trunc(lifetime_rewards);
      let v = sum * 1.3;
      progress[2].value = Math.trunc(v);
      e.preventDefault();
    });
}

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
