import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getFormateur} from '../../actions/index';
import Layout from '../../components/layouts';
function Formateurs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormateur());
  }, []);
  const Formateur = useSelector((state) => state.Formateur.Formateur);
  const m = useSelector((state) => state.Formateur.message);

  return (
    <Layout>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0">Search Filter</h4>
                </div>
                <div class="card-body">
                  <div class="filter-widget">
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Select Courses</h4>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span class="checkmark" /> Digital Marketer
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span class="checkmark" /> UNIX, Calculus,
                        Trigonometry
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark" /> Computer Programming
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark" /> ASP.NET,Computer Gaming
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark" /> HTML, Css
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark" /> VB, VB.net
                      </label>
                    </div>
                  </div>
                  <div class="btn-search">
                    <button type="button" class="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* /Search Filter */}
            </div>
            <div class="col-md-12 col-lg-8 col-xl-9">
              {/* Page Content */}
              <div>
                <div class="row row-grid">
                  {Formateur.length > 0
                    ? Formateur.map((formateur , index) => (
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="card widget-profile user-widget-profile">
                            <div class="card-body">
                              <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                  <a
                                    href="/formateur"
                                    class="booking-user-img"
                                  >
                                    <img
                                      src="assets/img/user/user.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <div class="profile-det-info">
                                    <h3>
                                      <a href="/formateur">
                                      {formateur.Prenom} {formateur.Nom} 
                                      </a>
                                    </h3>
                                    <div class="mentee-details">
                                      <h5>
                                        <b> ID :</b> {index+1}
                                      </h5>
                                      <h5 class="mb-0">
                                        <i class="fas fa-map-marker-alt" />{' '}
                                        {formateur.User.Pays}, {formateur.User.Ville}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="mentee-info">
                                <ul>
                                  <li>
                                    Phone <span>{formateur.User.Téléphone}</span>
                                  </li>
                                  <li>
                                  Expériences <span>{formateur.Expériences}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : 'Aucun Formateur dans la base de donnes'}
                </div>
              </div>
              {/* /Page Content */}
              {/* 
              <div class="card">
                <div class="card-body">
                  <div class="mentor-widget">
                    <div class="user-info-left">
                      <div class="mentor-img">
                        <a href="profile.html">
                          <img
                            src="assets/img/user/user2.jpg"
                            class="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div class="user-info-cont">
                        <h4 class="usr-name">
                          <a href="profile.html">Deborah Angel</a>
                        </h4>
                        <p class="mentor-type">
                          UNIX, Calculus, Trigonometry
                        </p>
                        <div class="rating">
                          <i class="fas fa-star filled" />
                          <i class="fas fa-star filled" />
                          <i class="fas fa-star filled" />
                          <i class="fas fa-star filled" />
                          <i class="fas fa-star" />
                          <span class="d-inline-block average-rating">
                            (27)
                          </span>
                        </div>
                        <div class="mentor-details">
                          <p class="user-location">
                            <i class="fas fa-map-marker-alt" /> Georgia, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="user-info-right">
                      <div class="user-infos">
                        <ul>
                          <li>
                            <i class="far fa-comment" /> 35 Feedback
                          </li>
                          <li>
                            <i class="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i class="far fa-money-bill-alt" /> $100 - $400{' '}
                            <i
                              class="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div class="mentor-booking">
                        <a class="apt-btn" href="booking.html">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             Mentor Widget */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Formateurs;
/*
                  <div class="card widget-profile user-widget-profile">
                    <div class="card-body">
                      <div class="pro-widget-content">
                        <div class="profile-info-widget">
                          <a href="#" class="booking-user-img">
                            <img
                              src="assets/img/user/user11.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div class="profile-det-info">
                            <h3>Harry Williams</h3>
                            <div class="mentee-details">
                              <h5>
                                <b>Mentee ID :</b> 11
                              </h5>
                              <h5 class="mb-0">
                                <i class="fas fa-map-marker-alt" />{' '}
                                Colorado, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mentee-info">
                        <ul>
                          <li>
                            Phone <span>+1 303 607 7075</span>
                          </li>
                          <li>
                            Age <span>9 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>A-</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
            */
