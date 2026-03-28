import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import tagIcon from './assets/images/tag.png';

const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (favicon) {
  favicon.href = tagIcon;
  favicon.type = 'image/png';
  favicon.setAttribute('sizes', '128x128');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();