"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
document.querySelector(".score").textContent = score;

const displayMsg = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "⛔ No number entered!";
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber > secretNumber
          ? "📈 Try lower number!"
          : "📉 Try larger number!";
      score--;
    } else {
      document.querySelector(".message").textContent = "💣 You lost!";
      score = 0;
    }
  } else if (guessNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
