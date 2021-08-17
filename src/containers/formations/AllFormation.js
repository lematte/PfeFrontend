import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { getFormation, getFormationByName } from "../../actions/index";
import Layout from "../../components/layouts";

function AllFormations() {
  const [Libelle, setLibelle] = useState();

  const dispatch = useDispatch();
  //loading: false

  let allFormations = null;

  useEffect(() => {
    allFormations = dispatch(getFormation());
  }, []);

  /*const Delete = () => {
   // dispatch(getContratsByIdFormation(f._id, donnees))
    window.location.reload();
  }*/
  const searchAgain = () => {
    if (Libelle == "") {
      allFormations = dispatch(getFormation());
    } else {
      allFormations = dispatch(getFormationByName(Libelle));
    }
  };

  const formation = useSelector((state) => state.Formation.Formation);
  const m = useSelector((state) => state.Formation.message);

  //const RRFormation = JSON.parse(localStorage.getItem("RRFormation"));

  return (
    <Layout>
      <div>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 theiaStickySidebar">
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
                          onKeyUp={searchAgain}
                          value={Libelle}
                          onChange={(e) => setLibelle(e.target.value)}
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
              <div class="col-md-8 col-lg-8 col-xl-8">
                <div class="row row-grid">
                  {formation.length > 0
                    ? formation.map((f) => (
                        <div class="col-md-4  col-lg-4 col-xl-4">
                          <div
                            class="blog grid-blog "
                            style={{ marginRight: "5px" }}
                          >
                            <div class="blog-image">
                              <a href={`/formation-details-${f._id}`}>
                                <img
                                  class="img-fluid"
                                  src="assets/img/blog/blog-01.jpg"
                                  alt="Post Image"
                                />
                              </a>
                            </div>
                            <div class="blog-content">
                              <ul class="entry-meta meta-item">
                                <li>
                                  <div class="post-author">
                                    <a href="/formation-details">
                                      <span>{f.Libelle}</span>
                                    </a>
                                  </div>
                                </li>
                                <li>{f.Prix} DTN</li>
                                <li>
                                  <i class="far fa-clock" />
                                  {f.Durrée}
                                </li>
                              </ul>
                              <h3 class="blog-title">
                                <a href="/formation-details">{f.Description}</a>
                              </h3>

                              <p class="mb-0">
                                Centre : {f.Centre_formation.Nom_centre}
                              </p>
                              <span> {f.Type}</span>
                            </div>
                          </div>
                          {/* /Blog Post */}
                        </div>
                      ))
                    : "Aucun Formation dans la base de donnes"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </Layout>
  );
}
export default AllFormations;
