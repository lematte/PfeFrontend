import React from 'react';
import Layout from '../../components/layouts';

function About() {
  return (
    <div>
      <Layout>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div>
                <main id="main">
                  <section id="about" class="about">
                    <div data-aos="fade-up">
                      <div class="row">
                        <div
                          class="col-lg-6 order-1 order-lg-2"
                          data-aos="fade-left"
                          data-aos-delay="100"
                        >
                          <img
                            src="assets/img/about.jpg"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                          <div className="col-12">
                            <h5>About Us</h5>
                          
                          <h3>
                            Voluptatem dignissimos provident quasi corporis
                            voluptates sit assumenda.
                          </h3>
                          <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <ul>
                            <li>
                              <i class="bi bi-check-circle"></i> Ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                              <i class="bi bi-check-circle"></i> Duis aute irure
                              dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                              <i class="bi bi-check-circle"></i> Ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate trideta
                              storacalaperda mastiro dolore eu fugiat nulla
                              pariatur.
                            </li>
                          </ul>
                          <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </Layout>
    </div>
  );
}
export default About;
