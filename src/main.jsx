import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'swiper/swiper-bundle.min.css'; // Swiper CSS import
import App from './App.jsx';
import './index.css';
import './assets/css/main.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
