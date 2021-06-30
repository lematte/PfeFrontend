import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <a href="/" className="navbar-brand logo">
              <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="/" className="menu-logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times" />
              </a>
            </div>

            <ul className="main-nav">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li className="has-submenu">
                <a href="/formations">
                  Courses <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="dashboard.html">Mentor Dashboard</a>
                  </li>
                  <li className="has-submenu">
                    <a href="blog.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="formateurs">Trainers</a>
              </li>
              <li className="has-submenu">
                <a href="/centres">Training Centers</a>
              </li>
              <li className="has-submenu">
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li className="login-link">
                <a href="/login">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="/register">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
