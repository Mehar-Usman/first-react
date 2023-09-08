import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NewPage from './NewPage'; // Corrected the import here

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/newPage' element={<NewPage />} /> {/* Corrected the component name here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
