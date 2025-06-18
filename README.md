# Quiz App

This is a simple web-based quiz application where users can answer multiple-choice questions, track their scores, and view high scores stored in a Firebase database.

## Features

- Start a quiz with 10 randomly selected questions
- Score calculation and feedback on correct/wrong answers
- High score submission and leaderboard
- Firebase Firestore integration for storing global high scores
- Responsive and user-friendly interface

## Technologies Used

- HTML, CSS, JavaScript
- Firebase (Firestore for high score storage)

## How to Run

1. Clone the repository:

   git clone https://github.com/your-username/quiz-app.git

2. Open the `index.html` file in a web browser.

3. Play the quiz and enter your name to save your high score.

## Firebase Setup

Make sure you have your Firebase project created and Firestore enabled. Replace the Firebase configuration in `firebase.js` with your own project credentials.

## Folder Structure

- `index.html` – Main quiz page
- `game.js` – Core quiz logic
- `end.html` – Final score and name input
- `end.js` – Logic to save high scores
- `highscores.html` – Leaderboard
- `highscores.js` – Fetches and displays scores
- `firebase.js` – Firebase configuration
- `style.css` – All styles in one place

## License

This project is for educational purposes. You are free to modify and use it as you like.
