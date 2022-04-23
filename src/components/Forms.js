import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Forms() {
  const contexto = useContext(AppContext);
  console.log(contexto.inputFiltro);
  return (

    <div>
      <input
        className=""
        type="text"
        name=""
        data-testid="name-filter"
        value={ contexto.inputFiltro }
        onChange={ contexto.onInputChange }
      />

      <select
        data-testid="column-filter"
        onChange={ contexto.onInputChangeColumn }
        value={ contexto.column }
      >

        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
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
          className=""
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
    </div>
  );
}
