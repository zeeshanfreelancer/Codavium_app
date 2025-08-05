import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App.jsx';
import ResponsiveAppBar from './components/Navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
