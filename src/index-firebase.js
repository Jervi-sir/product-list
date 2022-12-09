import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import NoPage from "./view/NoPage";
import AddProduct from "./view/AddProduct";

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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("products").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
  });
});



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
