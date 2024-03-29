import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import NoPage from "./view/NoPage";
import AddProduct from "./view/AddProduct";
import Perfume from "./view/Perfume";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="/perfume/:uuid" element={<Perfume />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
