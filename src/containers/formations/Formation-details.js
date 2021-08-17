import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { getFormation, getFormationByName } from "../../actions/index";
import Layout from "../../components/layouts";
import { useParams } from "react-router-dom";

function DetailsFormations() {
  const [formations, setFormatios] = useState([]);
  const dispatch = useDispatch();
  //loading: false

  const search = () => {
    // dispatch(getContratsByIdFormation(f._id, donnees))
    window.location.reload();
  };
let {idFormation} = useParams()
 // const formation = useSelector((state) => state.Formation.Formation);
  //const m = useSelector((state) => state.Formation.message);

  //const RRFormation = JSON.parse(localStorage.getItem("RRFormation"));
console.log(idFormation)
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
                      <button class="btn btn-primary submit-btn" type="submit">
                        Accéder à cette formation {idFormation}
                      </button>
                    </div>
                    <br />
                    <h3 class="blog-title">
                      Lorem Ipsum is simply dummy text of the printing
                    </h3>
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
                                <span>Marvin Downey</span>
                              </a>
                            </div>
                          </li>
                          <li>Prix : 100 DT</li>
                          <li>
                            <i class="far fa-star"></i>4.5 Evaluations
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
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
                                <h1 style={{ fontSize: "80px", color: "" }}>
                                  4.7
                                </h1>
                                <a class="comment-btn" href="#">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                </a>
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
                                          width: "75%",
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
                                          width: "50%",
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
                                          width: "30%",
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
                                          width: "20%",
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
                                          width: "10%",
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
      </Layout>
    </div>
  );
}
export default DetailsFormations;
