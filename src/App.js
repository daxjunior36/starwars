import React from 'react';
import Forms from './components/Forms';
import Table from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Forms />
      <Table />
    </AppProvider>
  );
}

export default App;
