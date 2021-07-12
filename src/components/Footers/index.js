import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="footer ">
        {/* Footer Top */}
        <div class="footer-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div class="footer-widget footer-about">
                  <div class="footer-logo">
                    <img src="assets/img/logo.png" alt="logo" />
                  </div>
                  <div class="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{' '}
                    </p>
                    <div class="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-facebook-f" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-twitter" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-dribbble" />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div class="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">Categories</h2>
                  <ul>
                    <li>
                      <a href="search.html">Search Mentors</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="dashboard-mentee.html">Mentee Dashboard</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div class="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Mentors</h2>
                  <ul>
                    <li>
                      <a href="appointments.html">Appointments</a>
                    </li>
                    <li>
                      <a href="chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="dashboard.html">Mentor Dashboard</a>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div class="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div class="footer-widget footer-contact">
                  <h2 class="footer-title">Contact Us</h2>
                  <div class="footer-contact-info">
                    <div class="footer-address">
                      <span>
                        <i class="fas fa-map-marker-alt" />
                      </span>
                      <p>
                        {' '}
                        Tunis , Monastir, 5000{' '}
                        
                      </p>
                    </div>
                    <br/>
                    <p>
                      <i class="fas fa-phone-alt" />
                      +216 500 000 00
                    </p>
                    <p class="mb-0">
                      <i class="fas fa-envelope" />
                      Training4All@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div class="footer-bottom">
          <div class="container-fluid">
            {/* Copyright */}
            <div class="copyright">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="copyright-text">
                    <p class="mb-0">
                      © 2020 Training4All. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
    </>
  );
};

export default Footer;
