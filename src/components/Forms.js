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

    </div>

  );
}
