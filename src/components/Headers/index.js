import React from 'react';
function Header() {
  return (
    <header class="header">
      <div class="header-fixed">
        <nav class="navbar navbar-expand-lg header-nav">
          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <a href="/" class="navbar-brand logo">
              <img src="assets/img/logo.png" class="img-fluid" alt="Logo" />
            </a>
          </div>
          <div class="main-menu-wrapper">
            <div class="menu-header">
              <a href="/" class="menu-logo">
                <img
                  src="assets/img/logo.png"
                  class="img-fluid"
                  alt="Logo"
                />
              </a>
              <a
                id="menu_close"
                class="menu-close"
                href="javascript:void(0);"
              >
                <i class="fas fa-times" />
              </a>
            </div>

            <ul class="main-nav">
              <li class="active">
                <a href="/">Home</a>
              </li>
              <li class="has-submenu">
                <a href="/formations">
                  Courses <i class="fas fa-chevron-down" />
                </a>
                <ul class="submenu">
                  <li>
                    <a href="dashboard.html">Mentor Dashboard</a>
                  </li>
                  <li class="has-submenu">
                    <a href="blog.html">Blog</a>
                    <ul class="submenu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-submenu">
                <a href="/formateurs">Trainers</a>
              </li>
              <li class="has-submenu">
                <a href="/centres">Training Centers</a>
              </li>
              <li class="has-submenu">
                <a href="/about">About</a>
              </li>
              <li class="login-link">
                <a href="/login">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul class="nav header-navbar-rht">
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link header-login" href="/register">
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
