import React, {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {useSelector, useDispatch} from 'react-redux';
import {getFormation} from '../../actions/index';
import Layout from '../../components/layouts';

function Formations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormation());
  }, []);
  const formation = useSelector((state) => state.Formation.Formation);
  const m = useSelector((state) => state.Formation.message);

  return (
    <div>
      <Layout>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 theiaStickySidebar">
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
              <div className="col-md-8 col-lg-8 col-xl-8">
                <div className="row row-grid">
                {formation.length > 0
                ? formation.map((f) => (
                  <div className="col-md-4  col-lg-4 col-xl-4">
                    <div
                      className="blog grid-blog "
                      style={{marginRight: '5px'}}
                    >
                      <div className="blog-image">
                        <a href="blog-details.html">
                          <img
                            className="img-fluid"
                            src="assets/img/blog/blog-01.jpg"
                            alt="Post Image"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <a href="blog-details.html">
                                <span>{f.Libelle}</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            {f.Prix} DTN
                          </li>
                          <li>
                            <i className="far fa-clock" />{f.Durrée}
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="blog-details.html">
                          {f.Description}
                          </a>
                        </h3>
                       
                        <p className="mb-0">
                         Centre : {f.Centre_formation.Nom_centre}
                        </p>
                        <span>  {f.Type}</span>
                      </div>
                     
                    </div>
                    {/* /Blog Post */}
                  </div>
               ))
               : 'Aucun Formation dans la base de donnes'}
    
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
export default Formations;
