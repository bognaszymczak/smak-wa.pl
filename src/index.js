import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import RecipePage from  './RecipePage';
import SearchPage from './SearchPage';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
