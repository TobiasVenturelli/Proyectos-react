import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUvjXThaXc9YivzW0AhnFsmYuGyxsWT9Q",
  authDomain: "kendrak-venturelli.firebaseapp.com",
  projectId: "kendrak-venturelli",
  storageBucket: "kendrak-venturelli.appspot.com",
  messagingSenderId: "250845053178",
  appId: "1:250845053178:web:e76a628cd80a934d2fc943"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);