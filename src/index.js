import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EleveParClasse from './personnes/EleveParClasse'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Eleve } from './personnes/Eleve';
import { Professeur } from './personnes/Professeur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/eleve-par-classe/:id" element={<EleveParClasse />}/> 
        <Route path="/eleve" element={<Eleve />}/> 
        <Route path="/professeur" element={<Professeur />}/> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
