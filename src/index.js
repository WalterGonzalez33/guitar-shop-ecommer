import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/styles.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8iblmtFnRq_3j6vWQSbNBG56qO9NxR7w",
  authDomain: "fireguitar-db139.firebaseapp.com",
  projectId: "fireguitar-db139",
  storageBucket: "fireguitar-db139.appspot.com",
  messagingSenderId: "434591240660",
  appId: "1:434591240660:web:b88b8d7131318bfbae8641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);