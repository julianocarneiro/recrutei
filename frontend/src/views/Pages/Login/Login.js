import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
        <div className="login-box">
          <div className="login-logo">
            <Link to="/dashboard"><b>R</b>ecrutei</Link>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Faça login para acessar o sistema.</p>

            <form action="../../index2.html" method="post">
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" />
                  <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" />
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
}

export default Login;
