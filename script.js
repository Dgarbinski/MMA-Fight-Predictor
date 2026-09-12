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

const currentCardLabel = document.querySelector("#current-picks .eyebrow");

if (currentCardLabel) {
  currentCardLabel.textContent = "CURRENT UFC CARD";
}

const heroActions = document.querySelector(".hero-actions");

if (heroActions && !document.querySelector(".weekly-picks-cta")) {
  const weeklyPicksButton = document.createElement("a");
  weeklyPicksButton.className = "button weekly-picks-cta";
  weeklyPicksButton.href = "#current-picks";
  weeklyPicksButton.textContent = "See This Week’s Picks ↓";
  heroActions.prepend(weeklyPicksButton);
}
