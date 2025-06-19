const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore ?? "0";


username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});


function saveHighScore(event) {
  event.preventDefault(); 
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
    window.location.href = "highScores.html"; 
  })
  .catch((error) => {
    console.error(" Error saving score:", error);
    alert("Failed to save score. Try again.");
  });
}
