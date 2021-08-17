import React, {useState, useEffect} from 'react';
import Layout from '../../components/layouts';

import {FaStar} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {getcentreFormation,getcenterbyNom} from '../../actions';

const Centers = () => {
  const dispatch = useDispatch();
  const [Nom_centre, setNom_centre] = useState();

  useEffect(() => {
    dispatch(getcentreFormation());
  }, []);

  let allCentreFormations = null;

  console.log(Nom_centre)
  const searchAgain = () => {
    if (Nom_centre == "") {
      allCentreFormations = dispatch(getcentreFormation());
    } else {
      allCentreFormations = dispatch(getcenterbyNom(Nom_centre));
    }
  };
  console.log(Nom_centre)

  let F = useSelector((state) => state.centre_formation.centre_formation);

  return (
    <div>
      <Layout>
      <div class="container-fluid">
        <div class="breadcrumb-bar">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-8 col-12">
                <h6 class="breadcrumb-title">
                  Les Centres de formations
                </h6>
              </div>
              <div class="col-md-4 col-12">
                <form class="search-form custom-search-form">
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search ..."
                      class="form-control"
                      onKeyUp={searchAgain}
                      value={Nom_centre}
                      onChange={(e) => setNom_centre(e.target.value)}
                    />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-primary">
                        <i class="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="container">
              <div class="r mb-3">
                <br />
                <div
                  id="carouselExampleInterval"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div
                      id="courses"
                      class="row courses"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                {F.length > 0
                        ? F.map((centre_formation) => (
                            <div
                              class="col-md-4 align-items-stretch"
                              style={{marginBottom: '30px'}}
                            >
                              <div
                                class="card"
                                key={centre_formation._id}
                                data-aos="fade-up"
                              >
                                <img
                                  class="card-img-top"
                                  variant="top"
                                  src={centre_formation.Photo}
                                  alt="Photo ..."
                                />
                                <div class="card-body course-content">
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
                                      <p class="card-text">
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
                    class="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
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
