import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checkout from './containers/checkout/checkout';
import Admin from './containers/admin/admin';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App />} />

          <Route path="/checkout/:checkout_id" element={<Checkout />} />

          <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
