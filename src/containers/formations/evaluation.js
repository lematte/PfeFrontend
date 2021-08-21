import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../actions/index";

import {
  updateEvaluation,
  DeleteEvaluation,
  getEvaluationById,
  ADDEvaluation,
  getByFormation,
  getEvaluations,
} from "../../actions/index";
import Layout from "../../components/layouts";
import { useParams } from "react-router-dom";

function DetailsFormations() {
  const [Note, setNote] = useState();

  const dispatch = useDispatch();

  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  const formation = useSelector((state) => state.Formation.Formation);

  console.log(formation);
  const AddEvaluation = (e) => {
    const Evaluation = {
      Note,
      id,
    };
    dispatch(ADDEvaluation(Evaluation));
    dispatch(getEvaluations());
  };
  console.log(Note)
  return (
    <div class="main-wrapper">
      <Layout>
        <div class="content" style={{ padding: "10px 70px 0px" }}>
          <div class="container-fluid">
            <div class="row" style={{ margin: "0px , 10px", marginTop: "0px" }}>
              <div class="col-lg-12 col-md-12">
                <div class="blog-view">
                  <div
                    class="blog blog-single-post"
                    style={{ textAlign: "center" }}
                  >
                    <h1 style={{ textAlign: "center" }}>Evaluation</h1>
                    Quel est votre niveau de satisfaction sur la formation ?
                    <br />
                    <br />
                    <div style={{ color: "#FFD700", fontSize: "250%" }}>
                    <a
                        onClick={() => setNote(1)}
                        //onClick={() => AddEvaluation()}
                        href="#"
                        style={{ color: "#FFD700" }}
                      >
                        <i class="fas fa-star"></i>
                      </a>{" "}
                      &nbsp;
                      <a
                        onClick={() => setNote(2)}
                        //onClick={() => AddEvaluation()}
                        href="#"
                        style={{ color: "#FFD700" }}
                      >
                        <i class="fas fa-star"></i>
                      </a>{" "}
                      &nbsp;
                      <a
                        onClick={() => setNote(3)}
                        //onClick={() => AddEvaluation()}
                        href="#"
                        style={{ color: "#FFD700" }}
                      >
                        <i class="fas fa-star"></i>
                      </a>{" "}
                      &nbsp;
                      <a
                        onClick={() => setNote(4)}
                        //onClick={() => AddEvaluation()}
                        href="#"
                        style={{ color: "#FFD700" }}
                      >
                        <i class="fas fa-star"></i>
                      </a>{" "}
                      &nbsp;
                      <a
                        onClick={() => setNote(5)}
                        //onClick={() => AddEvaluation()}
                        href="#"
                        style={{ color: "#FFD700" }}
                      >
                        <i class="fas fa-star"></i>
                      </a>{" "}
                      &nbsp;
                    </div>
                    <br />
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
        <br />
      </Layout>
    </div>
  );
}
export default DetailsFormations;

/*   <b>
        <div>
            <div
            className="row"
            style={{ color: "yellow", fontSize: "200%" }}
        >
            <div class="col-1"></div>

            <div
            className="col-sm-2"
            style={{ color: " #000000 " }}
            >
            1
            <br />
            <i class="fas fa-star"></i>
            </div>
            <div
            className="col-sm-2"
            style={{ color: "#999900" }}
            >
            2
            <br />
            <i class="fas fa-star"></i>
            </div>
            <div
            className="col-sm-2"
            style={{ color: " #b3b300" }}
            >
            3
            <br />
            <i class="fas fa-star"></i>
            </div>
            <div
            className="col-sm-2"
            style={{ color: " #cccc00 " }}
            >
            4
            <br />
            <i class="fas fa-star"></i>
            </div>
            <div
            className="col-sm-2"
            style={{ color: "#FFD700" }}
            >
            5
            <br />
            <i class="fas fa-star"></i>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <br/>
</b>
*/
