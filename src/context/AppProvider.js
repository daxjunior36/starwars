import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchApiPlanetas from '../api/currencyAPI';

function AppProvider({ children }) {
  const [guardaLista, setGuardaLista] = useState([]);
  const [inputFiltro, setInputFiltro] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  // const [filterByName, setFilterByName] = useState({ name: 'Tatoo' });

  const onInputChange = ({ target }) => {
    setInputFiltro(target.value);
    // setFilterByName(...filterByName, { name: [target.value] });
  };

  const onInputChangeColumn = ({ target }) => {
    setColumn(target.value);
  };

  const onInputChangeComparison = ({ target }) => {
    setComparison(target.value);
  };

  const onInputChangeValue = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    console.log('guardaLista.results', guardaLista);
  }, [guardaLista]);

  const onInputFilterByNumericValues = () => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
    console.log(comparison);
    switch (comparison) {
    case 'maior que':
      return setGuardaLista(guardaLista
        .filter((element) => Number(element[column]) > Number(value)));
    case 'menor que':
      return setGuardaLista(guardaLista
        .filter((element) => Number(element[column]) < Number(value)));
    case 'igual a':
      return setGuardaLista(guardaLista
        .filter((element) => Number(element[column]) === Number(value)));
    default:
      console.log('default');
    }

    // switch(comparison) {
    //   case 'maior que' : return tabela.filter((elementColumn) => elementColumn[column] > value));
    //   }
  };

  useEffect(() => {
    fetchApiPlanetas().then((data) => setGuardaLista(data.results));
  }, []);
  console.log(guardaLista);
  const contexto = {
    data: guardaLista,
    inputFiltro,
    onInputChange,
    column,
    onInputChangeColumn,
    comparison,
    onInputChangeComparison,
    value,
    onInputChangeValue,
    filterByNumericValues,
    onInputFilterByNumericValues,
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
