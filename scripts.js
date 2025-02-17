// Get Elements
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

// Load score from local storage
let score = localStorage.getItem("clickerScore") ? parseInt(localStorage.getItem("clickerScore")) : 0;
scoreDisplay.textContent = score;

// Click event
clickBtn.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem("clickerScore", score);
});

// Reset button
resetBtn.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    localStorage.setItem("clickerScore", score);
});