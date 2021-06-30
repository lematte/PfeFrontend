import React from 'react';
import CandidatHeader from '../../../components/Headers/CandidatHeader/index'
import CandidatSidebar from '../../../components/Sidebar/CandidatSidebar/index'

function DashboardCandidat() {
  return (
    <div>
      <div className="main-wrapper">
        <CandidatHeader/>
        <CandidatSidebar/>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="card">
                  <div className="bg-soft-primary">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p className="mb-3">Mentoring Panel</p>
                        </div>
                      </div>
                      <div className="align-self-end col-5">
                        <img
                          src="assets/img/profile-img.png"
                          alt
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-0 card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="avatar-md profile-user mb-4">
                          <img
                            src="assets/img/profiles/avatar-05.jpg"
                            alt
                            className="img-thumbnail rounded-circle img-fluid"
                          />
                        </div>
                        <div className="d-block">
                          <h5 className="text-truncate">Sofia Brient</h5>
                          <p className="text-muted mb-0  text-truncate">
                            Administrator
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="pt-4">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="font-size-15">12</h5>
                              <p className="text-muted mb-0">Meetings</p>
                            </div>
                            <div className="col-6">
                              <h5 className="font-size-15">$1245</h5>
                              <p className="text-muted mb-0">Revenue</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <a
                              className="btn btn-primary waves-effect waves-light btn-sm"
                              href="profile.html"
                            >
                              View Profile{' '}
                              <i className="mdi mdi-arrow-right ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Invoice Analytics</h5>
                      <div className="dropdown" data-toggle="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-white btn-sm dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Monthly
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Weekly
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Monthly
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Yearly
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="invoice_chart" />
                    <div className="text-center text-muted">
                      <div className="row">
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-primary mr-1" />{' '}
                              Invoiced
                            </p>
                            <h5>$ 2,132</h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-success mr-1" />{' '}
                              Received
                            </p>
                            <h5>$ 1,763</h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mt-4">
                            <p className="mb-2 text-truncate">
                              <i className="fas fa-circle text-danger mr-1" />{' '}
                              Pending
                            </p>
                            <h5>$ 973</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="row">
                  <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-primary bg-primary-light">
                            <i className="fas fa-user" />
                          </span>
                          <div className="dash-count">
                            <h3>168</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Members</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-primary w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-success bg-success-light">
                            <i className="fas fa-credit-card" />
                          </span>
                          <div className="dash-count">
                            <h3>487</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Appointments</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-success w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-warning bg-warning-light">
                            <i className="fas fa-star" />
                          </span>
                          <div className="dash-count">
                            <h3>485</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Mentoring Points</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-warning w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Sales Analytics</h5>
                      <div className="dropdown" data-toggle="dropdown">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-white btn-sm dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Monthly
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Weekly
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Monthly
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            Yearly
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
                      <div className="w-md-100 d-flex align-items-center mb-3 chart-content">
                        <div>
                          <span>Total Sales</span>
                          <p className="h3 text-primary mr-5">$1000</p>
                        </div>
                        <div>
                          <span>Receipts</span>
                          <p className="h3 text-success mr-5">$1000</p>
                        </div>
                        <div>
                          <span>Expenses</span>
                          <p className="h3 text-danger mr-5">$300</p>
                        </div>
                        <div>
                          <span>Earnings</span>
                          <p className="h3 text-dark mr-5">$700</p>
                        </div>
                      </div>
                    </div>
                    <div id="sales_chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                {/* Recent Orders */}
                <div className="card card-table flex-fill">
                  <div className="card-header">
                    <h4 className="card-title">Mentor List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Mentor Name</th>
                            <th>Course</th>
                            <th>Earned</th>
                            <th>Reviews</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">James Amen</a>
                              </h2>
                            </td>
                            <td>Maths</td>
                            <td>$3200.00</td>
                            <td>
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="far fa-star text-secondary" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-07.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jessica Fogarty</a>
                              </h2>
                            </td>
                            <td>Business Maths</td>
                            <td>$3100.00</td>
                            <td>
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="far fa-star text-secondary" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-17.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jose Anderson</a>
                              </h2>
                            </td>
                            <td>Algebra</td>
                            <td>$4000.00</td>
                            <td>
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="far fa-star text-secondary" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Sofia Brient</a>
                              </h2>
                            </td>
                            <td>Integrated Sum</td>
                            <td>$3200.00</td>
                            <td>
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="far fa-star text-secondary" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-14.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Marvin Campbell</a>
                              </h2>
                            </td>
                            <td>Flow chart</td>
                            <td>$3500.00</td>
                            <td>
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="fas fa-star text-warning" />
                              <i className="far fa-star text-secondary" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /Recent Orders */}
              </div>
              <div className="col-md-6 d-flex">
                {/* Feed Activity */}
                <div className="card  card-table flex-fill">
                  <div className="card-header">
                    <h4 className="card-title">Mentee List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Mentee Name</th>
                            <th>Phone</th>
                            <th>Last Visit</th>
                            <th>Paid</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jonathan Doe </a>
                              </h2>
                            </td>
                            <td>8286329170</td>
                            <td>20 Oct 2019</td>
                            <td className="text-right">$100.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user1.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Julie Pennington </a>
                              </h2>
                            </td>
                            <td>2077299974</td>
                            <td>22 Oct 2019</td>
                            <td className="text-right">$200.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user2.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Tyrone Roberts</a>
                              </h2>
                            </td>
                            <td>2607247769</td>
                            <td>21 Oct 2019</td>
                            <td className="text-right">$250.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user3.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Allen Davis </a>
                              </h2>
                            </td>
                            <td>5043686874</td>
                            <td>21 Sep 2019</td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user4.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Patricia Manzi </a>
                              </h2>
                            </td>
                            <td>9548207887</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$350.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /Feed Activity */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Recent Orders */}
                <div className="card card-table">
                  <div className="card-header">
                    <h4 className="card-title">Booking List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Mentor Name</th>
                            <th>Course</th>
                            <th>Mentee Name</th>
                            <th>Booking Time</th>
                            <th>Status</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">James Amen</a>
                              </h2>
                            </td>
                            <td>Maths</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jonathan Doe </a>
                              </h2>
                            </td>
                            <td>
                              9 Nov 2019{' '}
                              <span className="text-primary d-block">
                                11.00 AM - 11.15 AM
                              </span>
                            </td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">$200.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-07.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jessica Fogarty</a>
                              </h2>
                            </td>
                            <td>Business Maths</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user1.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Julie Pennington </a>
                              </h2>
                            </td>
                            <td>
                              5 Nov 2019{' '}
                              <span className="text-primary d-block">
                                11.00 AM - 11.35 AM
                              </span>
                            </td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_2"
                                  className="check"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="status_2"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">$300.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-17.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jose Anderson</a>
                              </h2>
                            </td>
                            <td>Algebra</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user2.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Tyrone Roberts</a>
                              </h2>
                            </td>
                            <td>
                              11 Nov 2019{' '}
                              <span className="text-primary d-block">
                                12.00 PM - 12.15 PM
                              </span>
                            </td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_3"
                                  className="check"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="status_3"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Sofia Brient</a>
                              </h2>
                            </td>
                            <td>Integrated Sum</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user3.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Allen Davis </a>
                              </h2>
                            </td>
                            <td>
                              7 Nov 2019
                              <span className="text-primary d-block">
                                1.00 PM - 1.20 PM
                              </span>
                            </td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_4"
                                  className="check"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="status_4"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/profiles/avatar-14.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Marvin Campbell</a>
                              </h2>
                            </td>
                            <td>Flow chart</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/user/user4.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Patricia Manzi </a>
                              </h2>
                            </td>
                            <td>
                              15 Nov 2019{' '}
                              <span className="text-primary d-block">
                                1.00 PM - 1.15 PM
                              </span>
                            </td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_5"
                                  className="check"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="status_5"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td className="text-right">$200.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /Recent Orders */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </div>
  );
}
export default DashboardCandidat;
