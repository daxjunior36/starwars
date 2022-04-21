import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchApiPlanetas from '../api/currencyAPI';

function AppProvider({ children }) {
  const [guardaLista, setGuardaLista] = useState([]);
  const [inputFiltro, setInputFiltro] = useState('');
  // const [filterByName, setFilterByName] = useState({ name: 'Tatoo' });

  const onInputChange = ({ target }) => {
    setInputFiltro(target.value);
    // setFilterByName(...filterByName, { name: [target.value] });
  };

  useEffect(() => {
    const funcListaPlanetas = async () => setGuardaLista(await fetchApiPlanetas());
    funcListaPlanetas();
  }, []);
  console.log(guardaLista);
  const contexto = {
    data: guardaLista,
    inputFiltro,
    onInputChange,
  };

  return (
    <AppContext.Provider value={ contexto }>
      {children}
    </AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default AppProvider;
