import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
AppProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default AppProvider;
