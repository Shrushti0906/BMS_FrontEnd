// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BatteryProvider } from './components/BatteryContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BatteryProvider>
      <App />
    </BatteryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
