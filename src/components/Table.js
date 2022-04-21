import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Table() {
  const contexto = useContext(AppContext);
  console.log(contexto.data.results);

  return (

    <div>
      OLÁ MUNDO

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {contexto.data.results !== undefined
          && contexto.data.results.filter((element) => element.name
            .includes(contexto.inputFiltro))
            .map((element) => (
              <tr key={ element.name }>
                <td>{element.name}</td>
                <td>{element.rotation_period}</td>
                <td>{element.orbital_period}</td>
                <td>{element.diameter}</td>
                <td>{element.climate}</td>
                <td>{element.gravity}</td>
                <td>{element.terrain}</td>
                <td>{element.surface_water}</td>
                <td>{element.population}</td>
                <td>{element.films}</td>
                <td>{element.created}</td>
                <td>{element.edited}</td>
                <td>{element.url}</td>

              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}
