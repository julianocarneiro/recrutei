import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

function Login({ history }) {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit(e){
    e.preventDefault();


    try {
      let response = await api.post('/authenticate', { email, password })
      console.log(response.status)

      if( response.data.success ){
          localStorage.setItem('token', response.data.token.token );
          console.log('usuario logado, token ' + response.data.token.token)

          history.push('/dashboard');
      }

    } catch (e) {
      console.log(e.response.status) // undefined
      console.log(e.response.data[0]) // undefined
    }






  }

  return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/dashboard"><b>R</b>ecrutei</Link>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Faça login para acessar o sistema.</p>

          <form action="../../index2.html" method="post" onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
              <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}

              />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
              />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">

              <div className="col-xs-12">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Logar</button>
              </div>
            </div>
          </form>
        </div>

      </div>
  );
}

export default Login;
