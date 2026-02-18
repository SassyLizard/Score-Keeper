// Initial scores
let scoreA = 0;
let scoreB = 0;

// Load scores from localStorage (if any)
function loadScores() {
  const savedScoreA = localStorage.getItem("scoreA");
  const savedScoreB = localStorage.getItem("scoreB");

  if (savedScoreA !== null) {
    scoreA = parseInt(savedScoreA, 10);
  }
  if (savedScoreB !== null) {
    scoreB = parseInt(savedScoreB, 10);
  }
}

// Save scores to localStorage
function saveScores() {
  localStorage.setItem("scoreA", scoreA);
  localStorage.setItem("scoreB", scoreB);
}

// Get DOM elements
const scoreADisplay = document.getElementById("score-a");
const scoreBDisplay = document.getElementById("score-b");
const incrementAButton = document.getElementById("increment-a");
const decrementAButton = document.getElementById("decrement-a");
const incrementBButton = document.getElementById("increment-b");
const decrementBButton = document.getElementById("decrement-b");
const resetButton = document.getElementById("reset");

// Update the displayed scores
function updateScores() {
  scoreADisplay.textContent = scoreA;
  scoreBDisplay.textContent = scoreB;
}

// Team A controls
function incrementScoreA() {
  scoreA++;
  updateScores();
  saveScores();
}

function decrementScoreA() {
  if (scoreA > 0) {
    scoreA--;
    updateScores();
    saveScores();
  }
}

// Team B controls
function incrementScoreB() {
  scoreB++;
  updateScores();
  saveScores();
}

function decrementScoreB() {
  if (scoreB > 0) {
    scoreB--;
    updateScores();
    saveScores();
  }
}

function resetScores() {
  scoreA = 0;
  scoreB = 0;
  updateScores();
  saveScores();
}

// Attach event listeners to buttons
incrementAButton.addEventListener("click", incrementScoreA);
decrementAButton.addEventListener("click", decrementScoreA);
incrementBButton.addEventListener("click", incrementScoreB);
decrementBButton.addEventListener("click", decrementScoreB);
resetButton.addEventListener("click", resetScores);

// Load any saved scores, then initialize display
loadScores();
updateScores();