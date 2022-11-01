import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import AppRoutes from './Routes';
import './App.css';
// eslint-disable-next-line no-unused-vars

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />

      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
