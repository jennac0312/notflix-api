import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './contexts/app_context';
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppContextProvider>
        <Router basename='/notflix-app'>
          <App />
        </Router>
      </AppContextProvider>
  </React.StrictMode>
);