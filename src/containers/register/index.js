import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signup} from '../../actions/index';
//import Layout from '../../components/layouts';
import Header from '../../components/Headers/index';

const currencies = [
  {
    value: 'formateur',
    label: 'formateur',
  },
  {
    value: 'centre_formation',
    label: 'centre de formation',
  },
  {
    value: 'candidat',
    label: 'candidat',
  },
];

function Register() {
  //role
  const [role, setCurrency] = useState('formateur');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  //autre
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Nom, setNom] = useState('');
  const [Nom_centre, setNom_centre] = useState('');
  const [Téléphone, setTéléphone] = useState('');

  //const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);

  const userSignup = (e) => {
    e.preventDefault();
    console.log(role);
    const user = {
      Email,
      Password,
      role,
      Prenom,
      Nom,
      Nom_centre,
      Téléphone,
    };
    dispatch(signup(user));
  };
  if (register.register) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {' '}
      <Header />
      <br/> <br/> <br/> 
      <div class="main-wrapper">
        <div class="bg-pattern-style bg-pattern-style-register">
          <div class="content">
            <div class="account-content">
              <div class="account-box">
                <div class="login-right">
                  <div class="login-header">
                    <h3>
                      <span>Training4All</span> Register
                    </h3>
                    <p class="text-muted">Access to our dashboard</p>
                  </div>

                  <form onSubmit={userSignup}>
                    <div class="form-group">
                      <label>
                        Type de compte <span class="text-danger">*</span>
                      </label>
                      <select
                        class="form-control select"
                        name="subcategory"
                        value={role}
                        onChange={handleChange}
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {role === 'centre_formation' ? (
                      <>
                        <div class="form-group">
                          <label class="form-control-label">Nom centre</label>
                          <input
                            id="nom"
                            type="text"
                            class="form-control"
                            value={Nom_centre}
                            onChange={(e) => {
                              setNom_centre(e.target.value);
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label">First Name</label>
                            <input
                              id="first-name"
                              type="text"
                              class="form-control"
                              name="first_name"
                              autofocus=""
                              value={Nom}
                              onChange={(e) => {
                                setNom(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label">Last Name</label>
                            <input
                              id="last-name"
                              type="text"
                              class="form-control"
                              name="last_name"
                              value={Prenom}
                              onChange={(e) => {
                                setPrenom(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div class="form-group">
                      <label class="form-control-label">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        value={Email}
                        type="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">Phone</label>
                      <input
                        id="telephone"
                        type="telephone"
                        class="form-control"
                        value={Téléphone}
                        onChange={(e) => {
                          setTéléphone(e.target.value);
                        }}
                      />
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label">Password</label>
                          <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            value={Password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label">
                            Confirm Password
                          </label>
                          <input
                            id="password-confirm"
                            type="password"
                            class="form-control"
                            name="password_confirmation"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-control-xs custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          name="agreeCheckboxUser"
                          id="agree_checkbox_user"
                        />
                        <label
                          class="custom-control-label"
                          for="agree_checkbox_user"
                        >
                          I agree to Mentoring
                        </label>
                        <a tabindex="-1" href="javascript:void(0);">
                          Privacy Policy
                        </a>{' '}
                        &amp;{' '}
                        <a tabindex="-1" href="javascript:void(0);">
                          {' '}
                          Terms.
                        </a>
                      </div>
                    </div>
                    <button class="btn btn-primary login-btn" type="submit">
                      Create Account
                    </button>
                    <div class="account-footer text-center mt-3">
                      Already have an account?{' '}
                      <a class="forgot-link mb-0" href="login.html">
                        Login
                      </a>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
     
    </div>
  );
}
export default Register;
