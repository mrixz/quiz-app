  const firebaseConfig = {
    apiKey: "AIzaSyCfqr7jx0rEretSD7YaKVS-C9dNVaGKF-s",
    authDomain: "quiz-app-c6a9c.firebaseapp.com",
    projectId: "quiz-app-c6a9c",
    storageBucket: "quiz-app-c6a9c.firebasestorage.app",
    messagingSenderId: "568460184350",
    appId: "1:568460184350:web:4dbb8dd4f96a734c97170f",
    measurementId: "G-EWPWXSCT3P"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();