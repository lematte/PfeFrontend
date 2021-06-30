import React from 'react';
import CandidatSidebar from '../../../../components/Sidebar/CandidatSidebar/index';
import CandidatHeader from '../../../../components/Headers/CandidatHeader/index';

function Index() {
  return (
    <div>
      <div className="main-wrapper">
        <CandidatHeader />
        <CandidatSidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">My Profile</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">My Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="profile-header">
                  <div className="row align-items-center">
                    <div className="col-auto profile-image">
                      <a href="#">
                        <img
                          className="rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-12.jpg"
                        />
                      </a>
                    </div>
                    <div className="col ml-md-n2 profile-user-info">
                      <h4 className="user-name mb-0">Allen Davis</h4>
                      <h6 className="text-muted">allendavis@admin.com</h6>
                      <div className="pb-3">
                        <i className="fas fa-map-marker-alt" /> Florida, United
                        States
                      </div>
                      <div className="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                    </div>
                    <div className="col-auto profile-btn"></div>
                  </div>
                </div>
                <div className="profile-menu">
                  <ul className="nav nav-tabs nav-tabs-solid">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#per_details_tab"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#password_tab"
                      >
                        Password
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content profile-tab-cont">
                  {/* Personal Details Tab */}
                  <div
                    className="tab-pane fade show active"
                    id="per_details_tab"
                  >
                    {/* Personal Details */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title d-flex justify-content-between">
                              <span>Personal Details</span>
                              <a
                                className="edit-link"
                                data-toggle="modal"
                                href="#edit_personal_details"
                              >
                                <i className="fa fa-edit mr-1" />
                                Edit
                              </a>
                            </h5>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Name
                              </p>
                              <p className="col-sm-10">Allen Davis</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Date of Birth
                              </p>
                              <p className="col-sm-10">24 Jul 1983</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Email ID
                              </p>
                              <p className="col-sm-10">
                                allendavis@example.com
                              </p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Mobile
                              </p>
                              <p className="col-sm-10">305-310-5857</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0">
                                Address
                              </p>
                              <p className="col-sm-10 mb-0">
                                4663 Agriculture Lane,
                                <br />
                                Miami,
                                <br />
                                Florida - 33165,
                                <br />
                                United States.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Personal Details */}
                  </div>
                  {/* /Personal Details Tab */}
                  {/* Change Password Tab */}
                  <div id="password_tab" className="tab-pane fade">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Change Password</h5>
                        <div className="row">
                          <div className="col-md-10 col-lg-6">
                            <form>
                              <div className="form-group">
                                <label>Old Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <button className="btn btn-primary" type="submit">
                                Save Changes
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Change Password Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </div>
  );
}
export default Index;
