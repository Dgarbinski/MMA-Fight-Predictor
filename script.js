const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const confidenceValue = document.querySelector(".confidence strong");

if (confidenceValue) {
  confidenceValue.textContent = "76%";
}

const confidenceBar = document.querySelector(".bar span");

if (confidenceBar) {
  confidenceBar.style.width = "76%";
  confidenceBar.style.background = "#22c55e";
}
