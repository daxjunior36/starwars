import React from 'react';
import './App.css';
import { userState } from 'react';
import AppContext from './context/App.Context';

function App() {

  const [ ] = userState([]);

  const contexto = {

  }

  return (
    <AppContext.Provider value={contexto}>
      <span>Hello, App!</span>
    </AppContext.Provider>
  );
}

export default App;
