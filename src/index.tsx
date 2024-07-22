import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const GlobalStyleProxy: any = GlobalStyles;

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyleProxy />
  </React.StrictMode>,
);
