import React, {useEffect, useState} from 'react';

import Header from '../../components/Headers/index';

import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../actions/index';

import Layout from '../../components/layouts/index';
function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('token') != undefined) {
    if (AuthUser.role === 'candidat') {
      return <Redirect to="/candidat/dashboard" />;
    } else if (AuthUser.role === 'admin') {
      return <Redirect to="/admin/dashboard" />;
    } else if (AuthUser.role === 'formateur') {
      return <Redirect to="/formateur" />;
    } else if (AuthUser.role === 'centre_formation') {
      return <Redirect to="/centre_formation/dashboard" />;
    }
  }

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      Email,
      Password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate && auth.user.role === 'candidat') {
    return <Redirect to="/candidat/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'admin') {
    return <Redirect to="/admin/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'formateur') {
    return <Redirect to="/formateur/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'centre_formation') {
    return <Redirect to="/centre_formation/dashboard" />;
  }

  return (
    <div>
      <div class="main-wrapper">
        <Header />
        <br />
        <div class="bg-pattern-style">
          <div class="content">
            <div class="account-content">
              <div class="account-box">
                <div class="login-right">
                  <div class="login-header">
                    <h3>
                      Login <span>Training4All</span>
                    </h3>
                    <p class="text-muted">Access to our dashboard</p>
                  </div>
                  <form onSubmit={userLogin}>
                    <div class="form-group">
                      <label class="form-control-label">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Password</label>
                      <div class="pass-group">
                        <input
                          type="password"
                          class="form-control pass-input"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span class="fas fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div class="text-right">
                      <a class="forgot-link" href="forgot-password.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <button class="btn btn-primary login-btn" type="submit">
                      Login
                    </button>
                    <div class="text-center dont-have">
                      Don’t have an account? <a href="/register">Register</a>
                    </div>
                    <br />
                    <div className={message ? 'alert alert-danger' : ' '}>
                      {message}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
