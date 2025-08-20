import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';

console.log('index.tsx loaded');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  console.log('React root created');
  root.render(
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  );
  console.log('React render called');
} else {
  console.error('Root element not found!');
}
