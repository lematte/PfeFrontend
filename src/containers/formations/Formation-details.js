import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../actions/index";

import { getByFormation } from "../../actions/index";
import Layout from "../../components/layouts";
import { useParams } from "react-router-dom";

function DetailsFormations() {
  // const [formations, setFormatios] = useState([]);
  const dispatch = useDispatch();

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getByFormation(id));
  }, []);

  const formation = useSelector((state) => state.Formation.Formation);
  const evaluation = useSelector((state) => state.evaluations.Evaluations);

  console.log(formation);
  console.log(evaluation);

  let E = 0;
  let Avg = 0;
  if (evaluation && evaluation.length > 0) {
    E = evaluation.map((e, i) => e.Note);
    console.log(E);
    Avg = E.reduce((curr, next) => curr + next) / E.length;
  }
  console.log(Avg);

  let Avg5,
    E5,
    E5_filtre = 0;

  let Avg4,
    E4,
    E4_filtre,
    Avg3,
    E3,
    E3_filtre,
    Avg2,
    E2,
    E2_filtre,
    Avg1,
    E1,
    E1_filtre = 0;

  //5 étoiles
  if (evaluation && evaluation.length > 0) {
    E5 = evaluation.map((e, i) => {
      if (e.Note === 5) {
        return 1;
      }
    });
    E5_filtre = E5.filter(function (val) {
      if (val == "" || val == NaN || val == undefined || val == null) {
        return false;
      }
      return true;
    });
    if (E5_filtre && E5_filtre.length > 0) {
      Avg5 = (E5_filtre.reduce((curr, next) => curr + next) / E.length) * 100;
    } else {
      Avg5 = 0;
    }
  }
  Avg5 = Avg5 + "%";

  console.log(E5);
  console.log(E5_filtre);
  console.log(Avg5);

  //4 étoiles
  if (evaluation && evaluation.length > 0) {
    E4 = evaluation.map((e, i) => {
      if (e.Note === 4) {
        return 1;
      }
    });
    E4_filtre = E4.filter(function (val) {
      if (val == "" || val == NaN || val == undefined || val == null) {
        return false;
      }
      return true;
    });
    if (E4_filtre && E4_filtre.length > 0) {
      Avg4 = (E4_filtre.reduce((curr, next) => curr + next) / E.length) * 100;
    } else {
      Avg4 = 0;
    }
  }
  Avg4 = Avg4 + "%";
  console.log(E4);
  console.log(E4_filtre);
  console.log(Avg4);

  //3 étoiles
  if (evaluation && evaluation.length > 0) {
    E3 = evaluation.map((e, i) => {
      if (e.Note === 3) {
        return 1;
      }
    });
    E3_filtre = E3.filter(function (val) {
      if (val == "" || val == NaN || val == undefined || val == null) {
        return false;
      }
      return true;
    });
    if (E3_filtre && E3_filtre.length > 0) {
      Avg3 = (E3_filtre.reduce((curr, next) => curr + next) / E.length) * 100;
    } else {
      Avg3 = 0;
    }
  }

  Avg3 = Avg3 + "%";
  console.log(E3);
  console.log(E3_filtre);
  console.log(Avg3);
  //2 étoiles
  if (evaluation && evaluation.length > 0) {
    E2 = evaluation.map((e, i) => {
      if (e.Note === 2) {
        return 1;
      }
    });
    E2_filtre = E2.filter(function (val) {
      if (val == "" || val == NaN || val == undefined || val == null) {
        return false;
      }
      return true;
    });
    if (E2_filtre && E2_filtre.length > 0) {
      Avg2 = (E2_filtre.reduce((curr, next) => curr + next) / E.length) * 100;
    } else {
      Avg2 = 0;
    }
  }

  Avg2 = Avg2 + "%";
  console.log(E2);
  console.log(E2_filtre);
  console.log(Avg2);
  //1
  if (evaluation && evaluation.length > 0) {
    E1 = evaluation.map((e, i) => {
      if (e.Note === 2) {
        return 1;
      }
    });
    E1_filtre = E1.filter(function (val) {
      if (val == "" || val == NaN || val == undefined || val == null) {
        return false;
      }
      return true;
    });
    if (E1_filtre && E1_filtre.length > 0) {
      Avg1 = (E1_filtre.reduce((curr, next) => curr + next) / E.length) * 100;
    } else {
      Avg1 = 0;
    }
  }

  Avg1 = Avg1 + "%";
  console.log(E1);
  console.log(E1_filtre);
  console.log(Avg1);
  return (
    <div class="main-wrapper">
      <Layout>
        <div class="content" style={{ padding: "10px 70px 0px" }}>
          <div class="container-fluid">
            <div class="row" style={{ margin: "0px , 10px", marginTop: "0px" }}>
              <div class="col-lg-12 col-md-12">
                <div class="blog-view">
                  <div class="blog blog-single-post">
                    <div class="blog-image" style={{ height: "70vh" }}>
                      <a href="javascript:void(0);">
                        <img
                          alt=""
                          src="assets/img/blog/blog-01.jpg"
                          style={{ height: "70vh" }}
                        />
                      </a>
                    </div>
                    <div class="submit-section">
                      <a href="/register" style={{ color: "#ffff" }}>
                        <button
                          class="btn btn-primary submit-btn"
                          type="button"
                          data-toggle="modal"
                          // data-target="#add"
                        >
                          Accéder à cette formation
                        </button>
                      </a>
                    </div>
                    <br />
                    <h3 class="blog-title">{formation.Libelle}</h3>
                    <div class="blog-info clearfix">
                      <div class="post-left">
                        <ul>
                          <li>
                            <div class="post-author">
                              <a href="profile.html">
                                <img
                                  src="assets/img/user/user.jpg"
                                  alt="Post Author"
                                />
                                <span>
                                  {formation.Formateur &&
                                  formation.Formateur.length !== 0
                                    ? formation.Formateur.Nom +
                                      " " +
                                      formation.Formateur.Prenom
                                    : " "}
                                </span>
                              </a>
                            </div>
                          </li>
                          <li>Prix : {formation.Prix} DT</li>
                          <li>
                            <i class="far fa-star"></i>
                            {Avg.toFixed(1)} Evaluations
                          </li>
                          <li>
                            <i class="far fa-clock" />
                            HTML
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="blog-content">
                      <p>
                        <br />
                        <b>
                          Nom Centre :{" "}
                          {formation.Centre_formation &&
                          formation.Centre_formation.length !== 0
                            ? formation.Centre_formation.Nom_centre
                            : " "}{" "}
                        </b>
                      </p>
                    </div>
                    <br />
                    <div
                      class="card-header"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      <h5>Share the post</h5>
                    </div>
                    <div class="card-body">
                      <ul class="social-share">
                        <li>
                          <a href="#" title="Facebook">
                            <i class="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Google Plus">
                            <i class="fab fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Youtube">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <br />
                  </div>
                  <div class="card blog-comments clearfix">
                    <div class="card-header">
                      <h4 class="card-title"> Evaluations </h4>
                    </div>
                    <div class="card-body pb-0">
                      <ul class="comments-list">
                        <div class="comment">
                          <div class="comment-block">
                            <div class="row ">
                              <div class="col-3">
                                {evaluation && evaluation.length > 0 ? (
                                  <div class="blog-content">
                                    <h1
                                      style={{
                                        fontSize: "80px",
                                        color: "",
                                      }}
                                    >
                                      {Avg.toFixed(1)}
                                    </h1>
                                    {(() => {
                                      // console.log(Avg)
                                      let etoiles = [];
                                      for (
                                        let i = 1;
                                        i <= Avg.toFixed(0);
                                        i++
                                      ) {
                                        etoiles.push(
                                          <>
                                            <i
                                              class="fa fa-star"
                                              aria-hidden="true"
                                              style={{ color: "#007bff" }}
                                            ></i>
                                          </>
                                        );
                                      }
                                      return etoiles;
                                    })()}
                                    {Avg.toFixed(1)/Avg.toFixed(0) > 1 ? (
                                      <i
                                        class="fa fa-star-half"
                                        aria-hidden="true"
                                        style={{ color: "#007bff" }}
                                      ></i>
                                    ) : (
                                      " "
                                    )}
                                  </div>
                                ) : (
                                  " "
                                )}
                                <a class="comment-btn" href="#"></a>
                                <br />
                                <br />
                              </div>
                              <div class="col-9">
                                <div class="row">
                                  <div class="col-1">
                                    <h6> 5</h6>
                                  </div>
                                  <div class="col-9">
                                    <div class="progress progress-xs">
                                      <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                          width: `${Avg5}`,
                                          ariaValuenow: "50",
                                          ariaValuemin: "0",
                                          ariaValuemax: "100",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                  <div class="col-1">
                                    <h6> 4</h6>
                                  </div>
                                  <div class="col-9">
                                    <div class="progress progress-xs">
                                      <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                          width: `${Avg4}`,
                                          ariaValuenow: "50",
                                          ariaValuemin: "0",
                                          ariaValuemax: "100",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-1">
                                    <h6> 3</h6>
                                  </div>
                                  <div class="col-9">
                                    <div class="progress progress-xs">
                                      <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                          width: `${Avg3}`,
                                          ariaValuenow: "50",
                                          ariaValuemin: "0",
                                          ariaValuemax: "100",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-1">
                                    <h6> 2</h6>
                                  </div>
                                  <div class="col-9">
                                    <div class="progress progress-xs">
                                      <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                          width: `${Avg2}`,
                                          ariaValuenow: "50",
                                          ariaValuemin: "0",
                                          ariaValuemax: "100",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-1">
                                    <h6> 1</h6>
                                  </div>
                                  <div class="col-9">
                                    <div class="progress progress-xs">
                                      <div
                                        class="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                          width: `${Avg1}`,
                                          ariaValuenow: "50",
                                          ariaValuemin: "0",
                                          ariaValuemax: "100",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* ADD Modal */}
        <div
          class="modal"
          id="add"
          role="dialog"
          style={{ display: "-msFlexbox" }}
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">ADD</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row form-row">
                    <div class="col-12">
                      <div class="form-group">
                        <label>Libelle</label>
                        <input
                          type="text"
                          class="form-control"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    onClick={" "}
                    data-dismiss="modal"
                  >
                    ADD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /ADD Modal */}

        <div></div>
      </Layout>
    </div>
  );
}
export default DetailsFormations;
