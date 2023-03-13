import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {startApp (); }, false);
} else {
  startApp ();
}

reportWebVitals();
