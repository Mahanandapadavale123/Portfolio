import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "./CreateTheme"; // Make sure this file exists!

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// If you want to measure performance in your app
reportWebVitals();
