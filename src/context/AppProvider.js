import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import fetchApiPlanetas from '../api/currencyAPI';

function AppProvider({ children }) {
  const [guardaLista, setGuardaLista] = useState([]);

  useEffect(() => {
    const funcListaPlanetas = async () => setGuardaLista(await fetchApiPlanetas());
    funcListaPlanetas();
  }, []);
  console.log(guardaLista);
  const contexto = {
    data: guardaLista,
  };

  return (
    <AppContext.Provider value={ contexto }>
      {children}
    </AppContext.Provider>
  );
}
// App.propTypes = {
// children: PropTypes.func,

export default AppProvider;
