import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Login.css';

// const five = 0.5;
// const oito = 0.8;

function Login() {
  const history = useHistory();

  return (

    <div className="container_login">

      <button
        className="button-sub"
        type="button"
        onClick={ () => history.push('/planets') }
      >
        Iniciar Viagem
      </button>

      <embed
        className="video"
        data-testid="video"
        src="https://www.youtube.com/embed/rgBzX-py6eY"
        allowFullScreen={ false }
        width="390"
        height="375"
      />
    </div>

  );
}

export default Login;
