import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyC54IOpE6Fb9m1Of35wAhWz2a14GdkkLOY",
  authDomain: "pructl.firebaseapp.com",
  projectId: "pructl",
  storageBucket: "pructl.appspot.com",
  messagingSenderId: "98696611505",
  appId: "1:98696611505:web:d86b8b3b64be9a9453c490",
  measurementId: "G-QZ66ZX07RF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
