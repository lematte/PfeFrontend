import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getFormateur} from '../../actions/index';
import Layout from '../../components/layouts';
function Formateur() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormateur());
  }, []);
  const Formateur = useSelector((state) => state.Formateur.Formateur);
  const m = useSelector((state) => state.Formateur.message);

  return (
    <Layout>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <div className="card search-filter">
                <div className="card-header">
                  <h4 className="card-title mb-0">Search Filter</h4>
                </div>
                <div className="card-body">
                  <div className="filter-widget">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Select Courses</h4>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span className="checkmark" /> Digital Marketer
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          defaultChecked
                        />
                        <span className="checkmark" /> UNIX, Calculus,
                        Trigonometry
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> Computer Programming
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> ASP.NET,Computer Gaming
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> HTML, Css
                      </label>
                    </div>
                    <div>
                      <label className="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark" /> VB, VB.net
                      </label>
                    </div>
                  </div>
                  <div className="btn-search">
                    <button type="button" className="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* /Search Filter */}
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              {/* Page Content */}
              <div>
                <div className="row row-grid">
                  {Formateur.length > 0
                    ? Formateur.map((formateur , index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="card widget-profile user-widget-profile">
                            <div className="card-body">
                              <div className="pro-widget-content">
                                <div className="profile-info-widget">
                                  <a
                                    href="profile-mentee.html"
                                    className="booking-user-img"
                                  >
                                    <img
                                      src="assets/img/user/user.jpg"
                                      alt="User Image"
                                    />
                                  </a>
                                  <div className="profile-det-info">
                                    <h3>
                                      <a href="profile-mentee.html">
                                      {formateur.Prenom} {formateur.Nom} 
                                      </a>
                                    </h3>
                                    <div className="mentee-details">
                                      <h5>
                                        <b> ID :</b> {index+1}
                                      </h5>
                                      <h5 className="mb-0">
                                        <i className="fas fa-map-marker-alt" />{' '}
                                        {formateur.User.Pays}, {formateur.User.Ville}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mentee-info">
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
              <div className="card">
                <div className="card-body">
                  <div className="mentor-widget">
                    <div className="user-info-left">
                      <div className="mentor-img">
                        <a href="profile.html">
                          <img
                            src="assets/img/user/user2.jpg"
                            className="img-fluid"
                            alt="User Image"
                          />
                        </a>
                      </div>
                      <div className="user-info-cont">
                        <h4 className="usr-name">
                          <a href="profile.html">Deborah Angel</a>
                        </h4>
                        <p className="mentor-type">
                          UNIX, Calculus, Trigonometry
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (27)
                          </span>
                        </div>
                        <div className="mentor-details">
                          <p className="user-location">
                            <i className="fas fa-map-marker-alt" /> Georgia, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="user-info-right">
                      <div className="user-infos">
                        <ul>
                          <li>
                            <i className="far fa-comment" /> 35 Feedback
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" /> Newyork, USA
                          </li>
                          <li>
                            <i className="far fa-money-bill-alt" /> $100 - $400{' '}
                            <i
                              className="fas fa-info-circle"
                              data-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="mentor-booking">
                        <a className="apt-btn" href="booking.html">
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
export default Formateur;
/*
                  <div className="card widget-profile user-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <a href="#" className="booking-user-img">
                            <img
                              src="assets/img/user/user11.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="profile-det-info">
                            <h3>Harry Williams</h3>
                            <div className="mentee-details">
                              <h5>
                                <b>Mentee ID :</b> 11
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt" />{' '}
                                Colorado, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mentee-info">
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
