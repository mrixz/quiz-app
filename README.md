Quiz App

This is a browser-based quiz application built using HTML, CSS, and JavaScript. It supports multiple quiz categories and keeps track of high scores using Firebase.

Features

Choose from different quiz categories

Score tracking 

High scores saved in Firebase Firestore

Clean, responsive design

Technologies Used

HTML, CSS, JavaScript (Vanilla)

Firebase (Firestore database)

File Overview

index.html         - Landing page
game.html          - Main quiz interface
end.html           - Displays score and saves it
highScores.html    - Shows leaderboard
app.css            - General styles
game.css           - Game-specific styles
highscore.css      - High scores styles
firebase.js        - Firebase configuration and Firestore setup
game.js            - Quiz logic and gameplay
end.js             - Score submission logic
highScores.js      - Leaderboard logic

Getting Started

Clone the repositoryOpen a terminal and run:

git clone https://github.com/mrixz/quiz-app.git
cd quiz-app

Set up Firebase

Create a Firebase project on firebase.google.com.

Enable Firestore in the Firebase console.

Replace the configuration in firebase.js with your project's credentials.

Run the App
Just open index.html in your browser.

Possible Improvements

Add more categories and questions

Improve mobile responsiveness

Add user authentication for saving personal high scores

About

This project was created by Mridul Narayanan as a personal learning project.
Feel free to use or modify it for your own purposes.

License

This project is licensed under the MIT License.

