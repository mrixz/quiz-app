const highScoresList = document.getElementById("highScoresList");

db.collection("highscores")
  .orderBy("score", "desc")
  .limit(10)
  .get()
  .then((snapshot) => {
    highScoresList.innerHTML = snapshot.docs
      .map((doc, index) => {
        const data = doc.data();
        const medals = ["🥇", "🥈", "🥉"];
        const medalStyle = [
          'style="color: gold; font-weight: bold;"',
          'style="color: silver; font-weight: bold;"',
          'style="color: #cd7f32; font-weight: bold;"' 
        ];

        const prefix = medals[index] || `${index + 1}.`;
        const style = medalStyle[index] || '';

        return `<li ${style} style="animation-delay: ${index * 0.1}s">${prefix} ${data.name} - ${data.score}</li>`;
      })
      .join("");
  })
  .catch((error) => {
    console.error("Error fetching high scores:", error);
    highScoresList.innerHTML = "<li>Failed to load scores.</li>";
  });
