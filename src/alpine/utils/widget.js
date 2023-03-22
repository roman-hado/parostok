export const widget = () => ({
  procent: "",
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.countProcent();
    });
  },
  randomNum(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  },

  countProcent() {
    let procent = document.querySelector(".procent").innerText;
    let amount = document.querySelector(".amount").innerText;
    let bar = document.querySelector(".bar");

    console.log(procent);

    let procentWidth = (+procent / +amount) * 100;

    bar.style.width = procentWidth + "%";
    this.procent = procentWidth;
  },
});
