import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Forms() {
  const contexto = useContext(AppContext);
  console.log(contexto.inputFiltro);
  return (

    <div className="todos_imputes">
      <input
        type="text"
        name=""
        data-testid="name-filter"
        value={ contexto.inputFiltro }
        onChange={ contexto.onInputChange }
      />

      <select
        className="todos_imputes"
        data-testid="column-filter"
        onChange={ contexto.onInputChangeColumn }
        value={ contexto.column }
      >

        {contexto.listaColumn.map((element) => (
          <option
            key={ element }
            value={ element }
          >
            { element }
          </option>))}
      </select>

      <select
        className="todos_imputes"
        data-testid="comparison-filter"
        onChange={ contexto.onInputChangeComparison }
        value={ contexto.comparison }

      >

        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>

      <div>
        <input
          className="todos_imputes"
          type="number"
          name=""
          data-testid="value-filter"
          onChange={ contexto.onInputChangeValue }
          value={ contexto.value }
        />
      </div>
      <div className="button_addFiltro">
        <button
          type="button"
          data-testid="button-filter"
          onClick={ contexto.onInputFilterByNumericValues }
        >
          FILTRAR
        </button>
      </div>
      <ul>
        {contexto.filterByNumericValues.map((element) => (
          <li key={ element.column }>
            {`${element.column} ${element.comparison} ${element.value}`}
            <button
              type="button"
            >
              X
            </button>
          </li>
        )) }
      </ul>
    </div>
  );
}
// console.log(contexto.filterByNumericValues);
// FAZER UM FILTRO QUE POSSIBILITE REMOVER O INTEM SELECIONADO DO SELECTD.
// FAZER UMA FUNÇÃO PRA COLOCAR NO CLICK DO BOTÃO PARA EXCLUIR.
