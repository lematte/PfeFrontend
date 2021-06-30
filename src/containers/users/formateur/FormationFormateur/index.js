import React from 'react';

import FormateurHeader from '../../../../components/Headers/FormateurHeader/index';
import FormateurSidebar from '../../../../components/Sidebar/FormateurSidebar/index';

function FormationFormateur() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <FormateurHeader />
        <FormateurSidebar />
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Courses </h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div classname="row">
          <div classname="col-sm-12">
            Contents
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className=" table table-hover  ">
                    <thead>
                      <tr>
                        <th>Invoice Number</th>
                        <th>Mentee ID</th>
                        <th>Mentee Name</th>
                        <th>Total Amount</th>
                        <th>Created Date</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="invoice.html">#IN0001</a>
                        </td>
                        <td>#01</td>
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
                        <td>$100.00</td>
                        <td>9 Sep 2019</td>
                        <td className="text-center">
                          <span className="badge badge-pill bg-success inv-badge">
                            Paid
                          </span>
                        </td>
                        <td className="text-right">
                          <div className="actions">
                            <a
                              data-toggle="modal"
                              href="#edit_invoice_report"
                              className="btn btn-sm bg-success-light mr-2"
                            >
                              <i className="fas fa-pencil-alt" /> Edit
                            </a>
                            <a
                              className="btn btn-sm bg-danger-light"
                              data-toggle="modal"
                              href="#delete_modal"
                            >
                              <i className="far fa-trash-alt" /> Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Edit Details Modal */}
          <div
            className="modal fade"
            id="edit_invoice_report"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Invoice Report</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row form-row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Invoice Number</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="#INV-0001"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Mentee ID</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="	#01"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Mentee Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Jonathan Doe"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Mentee Image</label>
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Total Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$200.00"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Created Date</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="29th Oct 2019"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Edit Details Modal */}
          {/* Delete Modal */}
          <div
            className="modal fade"
            id="delete_modal"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                {/*	<div class="modal-header">
						<h5 class="modal-title">Delete</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>*/}
                <div className="modal-body">
                  <div className="form-content p-2">
                    <h4 className="modal-title">Delete</h4>
                    <p className="mb-4">Are you sure want to delete?</p>
                    <button type="button" className="btn btn-primary">
                      Delete{' '}
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormationFormateur;
