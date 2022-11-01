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
  const [listaColumn, setListaColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const onInputChange = ({ target }) => {
    setInputFiltro(target.value);
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

  const removeLista = () => {
    listaColumn.splice(listaColumn.indexOf(column), 1);
    setColumn(listaColumn[0]);
    console.log(listaColumn);
  };

  // useEffect(() => {
  //   console.log('guardaLista.results', guardaLista);
  // }, [guardaLista]);

  const onInputFilterByNumericValues = () => {
    setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
    removeLista();
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
  };

  useEffect(() => {
    fetchApiPlanetas().then((data) => setGuardaLista(data.results));
  }, []);
  // console.log(guardaLista);
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
    listaColumn,
    setListaColumn,
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
