const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore ?? "0";

// Enable save button only when username has text
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

// Save score to Firestore on button click
function saveHighScore(event) {
  event.preventDefault(); // prevent form reload

  const name = username.value.trim();
  const score = Number(mostRecentScore) || 0;

  if (!name) return;

  db.collection("highscores").add({
    name: name,
    score: score,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log("Score saved to Firestore");
    window.location.href = "highScores.html"; // redirect to leaderboard
  })
  .catch((error) => {
    console.error(" Error saving score:", error);
    alert("Failed to save score. Try again.");
  });
}
