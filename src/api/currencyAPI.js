const API_PLANETAS = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchApiPlanetas() {
  const response = await fetch(API_PLANETAS);
  const apiPlanetas = await response.json();
  console.log(apiPlanetas);

  return apiPlanetas;
}

export default fetchApiPlanetas;
