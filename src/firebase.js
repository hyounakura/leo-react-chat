import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAa8y8sKv108h_Tv8Dbf8ciKMA_bAWz_G8",
    authDomain: "leo-chat-60ac5.firebaseapp.com",
    projectId: "leo-chat-60ac5",
    storageBucket: "leo-chat-60ac5.appspot.com",
    messagingSenderId: "1052462258885",
    appId: "1:1052462258885:web:8d61febbfe5130a4272eac"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};