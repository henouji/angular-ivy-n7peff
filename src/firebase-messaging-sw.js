importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyC0sjC9AGSZQrcnaAMU-O9y85_ACSrvl5s',
  authDomain: 'project-heylp.firebaseapp.com',
  projectId: 'project-heylp',
  storageBucket: 'project-heylp.appspot.com',
  messagingSenderId: '521830282629',
  appId: '1:521830282629:web:71c9ba952003d71a94c0ec',
  measurementId: 'G-4EJG5TTW5S'
});
const messaging = firebase.messaging();
