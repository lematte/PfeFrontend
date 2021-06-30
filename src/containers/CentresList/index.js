import React, {useState, useEffect} from 'react';
import Layout from '../../components/layouts';

import {FaStar} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {getcentreFormation} from '../../actions';

const Centers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcentreFormation());
  }, []);
  const F = useSelector((state) => state.centre_formation.centre_formation);

  return (
    <div>
      <Layout>
      <div className="container-fluid">
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <h6 className="breadcrumb-title">
                  Les Centres de formations
                </h6>
              </div>
              <div className="col-md-4 col-12">
                <form className="search-form custom-search-form">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="r mb-3">
                <br />
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      id="courses"
                      className="row courses"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      {F.length > 0
                        ? F.map((centre_formation) => (
                            <div
                              className="col-md-4 align-items-stretch"
                              style={{marginBottom: '30px'}}
                            >
                              <div
                                className="card"
                                key={centre_formation._id}
                                data-aos="fade-up"
                              >
                                <img
                                  className="card-img-top"
                                  variant="top"
                                  src={centre_formation.Photo}
                                  alt="Photo ..."
                                />
                                <div className="card-body course-content">
                                  <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4>{centre_formation.Nom_centre}</h4>
                                    <p>
                                      Téléphone :{' '}
                                      {centre_formation.User.Téléphone}
                                    </p>
                                  </div>
                                  <h3>
                                    <a href="course-details.html">
                                      {centre_formation.Code_postal}
                                    </a>
                                  </h3>
                                  <div class="trainer d-flex justify-content-between align-items-center">
                                    <div class="trainer-profile d-flex align-items-center">
                                      <img
                                        src="assets/img/trainers/trainer-1.jpg"
                                        class="img-fluid"
                                        alt=""
                                      />
                                      <p className="card-text">
                                        {'   '}
                                        {centre_formation.Nom_centre}
                                      </p>
                                    </div>
                                    <div class="trainer-rank d-flex align-items-center">
                                      4.7 &nbsp; <FaStar />
                                      &nbsp;&nbsp; &nbsp;
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        : 'Aucun Formation dans la base de donnes'}
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  );
};
export default Centers;
