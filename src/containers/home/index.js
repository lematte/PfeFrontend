import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getFormation,
  getcenterbyNom,
  
} from "../../actions/index";
import Layout from "../../components/layouts/index";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  //const [Nom_centre, setNom_centre] = useState("");
  const [Libelle, setLibelle] = useState("");
  
  useEffect(() => {
    dispatch(getFormation());
  }, []);
  
  const Search = () => {
    console.log(Libelle);
    history.push("/formations-search",{ search: Libelle });

    //dispatch(getFormationByName(Libelle));
   // window.location.reload();
  };

  const F = useSelector((state) => state.Formation.Formation);
  const m = useSelector((state) => state.Formation.message);
  //const rrf = useSelector((state) => state.Formation.RRF)

 // console.log(rrf)
 /* const Select = () => {
    console.log(Nom_centre);
    dispatch(getcenterbyNom(Nom_centre));
  };*/
 

  return (
    <div className="main-wrapper">
      <Layout>
        {/* Home Banner */}
        <section className="section section-search">
          <div className="container">
            <div className="banner-wrapper m-auto text-center">
              <div className="banner-header">
                <h1>
                 <span>Training4All</span>
                </h1>
                <p>
                Si vous êtes centre de formations, formateur ou candidat <span>Training4All</span> c'est pour vous.
                </p>
              </div>
              {/* Search */}
              <div className="search-box">
                <form >
                  <div className="form-group search-location">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Location"
                    />
                  </div>
                  <div className="form-group search-info">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search School, Online educational centers, etc"
                      value={Libelle}
                      onChange={(e) => setLibelle(e.target.value)} 
                    />
                  </div>
                  <button
                    className="btn btn-primary search-btn"
                    onClick={Search}
                  >
                    <i>
                      <img src="assets/img/search-submit.png" alt />
                    </i>{" "}
                    <span>Search</span>
                  </button>
                </form>
              </div>
              {/* /Search */}
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        <section className="section how-it-works">
          <div className="container">
            <div className="section-header text-center">
              <h2>Vous cherchez un site qui regroupe plusieurs centres de formations ?</h2>
              <p className="sub-title">
               Training4All c'est pour vous.
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i>
                        <img src="assets/img/icon-1.png" alt />
                      </i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text">Inscription</div>
                    </div>
                  </div>
                  <p className="mb-0">
                  Vous cherchez à rejoindre l'apprentissage en ligne? 
                   Inscrivez-vous
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i>
                        <img src="assets/img/icon-2.png" alt />
                      </i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text">Recrutement</div>
                    </div>
                  </div>
                  <p className="mb-0">
                  Trouver des formateurs compétents devenir facile grâce à training4All
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="feature-box text-center">
                  <div className="feature-header">
                    <div className="feature-icon">
                      <span className="circle" />
                      <i>
                        <img src="assets/img/icon-3.png" alt />
                      </i>
                    </div>
                    <div className="feature-cont">
                      <div className="feature-text"> Postuler</div>
                    </div>
                  </div>
                  <p className="mb-0">
                  Vous pouvez postuler facilement grâce à notre site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section popular-courses">
          <div className="container">
            <div className="section-header text-center">
              <h2>Formations</h2>
              <p className="sub-title">
              Choisissez votre cours, il vous aidera à atteindre vos objectifs professionnels.
              </p>
            </div>
            <div className="owl-carousel owl-theme">
            <div class="course-box">
							<div class="product">
								<div class="product-img">
									<a href="profile.html">
									</a>
								</div>
								<div class="product-content">
									<h3 class="title"><a href="profile.html">Donna Yancey</a></h3>
									<div class="author-info">
										<div class="author-name">
											Digital Marketer
										</div>
									</div>
									<div class="rating">							
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">4.4</span>
									</div>
									<div class="author-country">
										<p class="mb-0"><i class="fas fa-map-marker-alt"></i> Paris, France</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="course-box">
							<div class="product">
								<div class="product-img">
									<a href="profile.html">
									</a>
								</div>
								<div class="product-content">
									<h3 class="title"><a href="profile.html">James Amen</a></h3>
									<div class="author-info">
										<div class="author-name">
											UNIX, Calculus, Trigonometry
										</div>
									</div>
									<div class="rating">						
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">4.4</span>
									</div>
									<div class="author-country">
										<p class="mb-0"><i class="fas fa-map-marker-alt"></i> Paris, France</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="course-box">
							<div class="product">
								<div class="product-img">
									<a href="profile.html">
									</a>
								</div>
								<div class="product-content">
									<h3 class="title">Marvin Downey</h3>
									<div class="author-info">
										<div class="author-name">
											ASP.NET,Computer Gaming
										</div>
									</div>
									<div class="rating">						
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">4.4</span>
									</div>
									<div class="author-country">
										<p class="mb-0"><i class="fas fa-map-marker-alt"></i> Paris, France</p>
									</div>
								</div>
							</div>
						</div>

              {F.map((formation, i) => (
                <div class="course-box" key={i} >
                  <div class="product">
                    <div class="product-img">
                      <Link to="#">
                        <img class="img-fluid" alt="rien" src=" " />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <Link to="#">{formation.Libelle}</Link>
                      </h3>
                      <div className="author-info">
                        <div className="author-name">Digital Marketer</div>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">4.4</span>
                      </div>
                      <div className="author-country">
                        <p className="mb-0">
                          <i className="fas fa-map-marker-alt" /> Paris, France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Path section start */}
        <section className="section path-section">
          <div className="section-header text-center">
            <div className="container">
              <span>Choose the</span>
              <h2>Different All Learning Paths</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="learning-path-col">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img1.jpg" alt />
                        <div className="text-col">
                          <h5>Digital Marketer</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img2.jpg" alt />
                        <div className="text-col">
                          <h5>Ui designer</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img3.jpg" alt />
                        <div className="text-col">
                          <h5>IT Security</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img4.jpg" alt />
                        <div className="text-col">
                          <h5>Front-End Developer</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img5.jpg" alt />
                        <div className="text-col">
                          <h5>Web Developer</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img6.jpg" alt />
                        <div className="text-col">
                          <h5>Administrator</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img7.jpg" alt />
                        <div className="text-col">
                          <h5>Project Manager</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="large-col">
                    <a href="search.html" className="large-col-image">
                      <div className="image-col-merge">
                        <img src="assets/img/path-img8.jpg" alt />
                        <div className="text-col">
                          <h5>PHP Developer</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="view-all text-center">
                <a href="#" className="btn btn-primary">
                  View All
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Path section end */}
        {/* Blog Section */}
        <section className="section section-blogs">
          <div className="container">
            {/* Section Header */}
            <div className="section-header text-center">
              <span>Lorem ipsum dolor</span>
              <h2>The Blogs &amp; News</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* /Section Header */}
            <div className="row blog-grid-row">
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
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
                            <span>Tyrone Roberts</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> 4 Dec 2019
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        What is Lorem Ipsum? Lorem Ipsum is simply
                      </a>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img
                        className="img-fluid"
                        src="assets/img/blog/blog-02.jpg"
                        alt="Post Image"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="blog-details.html">
                            <span>Brittany Garcia</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> 3 Dec 2019
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Contrary to popular belief, Lorem Ipsum is
                      </a>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img
                        className="img-fluid"
                        src="assets/img/blog/blog-03.jpg"
                        alt="Post Image"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="blog-details.html">
                            <span>Allen Davis</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> 3 Dec 2019
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        The standard chunk of Lorem Ipsum used
                      </a>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12">
                {/* Blog Post */}
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img
                        className="img-fluid"
                        src="assets/img/blog/blog-04.jpg"
                        alt="Post Image"
                      />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <a href="blog-details.html">
                            <span>William Lawrence</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> 2 Dec 2019
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        The standard Lorem Ipsum passage, used
                      </a>
                    </h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
            <div className="view-all text-center">
              <a href="blog-list.html" className="btn btn-primary">
                View All
              </a>
            </div>
          </div>
        </section>
        {/* /Blog Section */}
        {/* Statistics Section */}
        <section className="section statistics-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>500+</span>
                  <h3>Happy Clients</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>120+</span>
                  <h3>Online Appointments</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="statistics-list text-center">
                  <span>100%</span>
                  <h3>Job Satisfaction</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Statistics Section */}
      </Layout>
    </div>
  );
}
export default Home;
