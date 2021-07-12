import React from 'react';
import Header from '../Headers/index';
import Footer from '../Footers/index';

import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Layout(props) {
  const user = JSON.parse(window.localStorage.getItem('user'));

  return (
    <div>
      <>
        <Header />
        <br />
        <br />
        <br />
        {props.sidebar ? (
          <div class="container">
            <div class="row">
              <div class="col">{props.children}</div>
            </div>{' '}
            !
          </div>
        ) : (
          props.children
        )}
        <div id="preloader"></div>
        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
        
        <Footer />
      </>
    </div>
  );
}
export default Layout;
