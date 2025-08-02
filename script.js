const symbolSet = ["★", "✿", "❖", "☯", "♛", "⚡", "✦", "🦄", "☘️", "🔮"];
const secretSymbol = symbolSet[Math.floor(Math.random() * symbolSet.length)];

function generateSymbols() {
  const output = document.getElementById("symbols");
  output.innerHTML = "";
  for (let i = 0; i <= 99; i++) {
    const symbol = i % 9 === 0 ? secretSymbol : symbolSet[Math.floor(Math.random() * symbolSet.length)];
    output.innerHTML += `${i}: ${symbol} <br>`;
  }
}

function revealSymbol() {
  const loading = document.getElementById("loading");
  const answer = document.getElementById("answer");

  // Reset state
  loading.style.display = "block";
  answer.textContent = "";
  answer.classList.remove("show");

  setTimeout(() => {
    loading.style.display = "none";
    answer.innerHTML = `✨ You're thinking of: <span style="font-size:48px;">${secretSymbol}</span> ✨`;
    answer.classList.add("show");

    // Optional: Play mystical sound
    // new Audio('magic-sound.mp3').play();
  }, 2000);
}

generateSymbols();
