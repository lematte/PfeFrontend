import React from 'react';

import FormateurHeader from '../../../../components/Headers/FormateurHeader/index';
import FormateurSidebar from '../../../../components/Sidebar/FormateurSidebar/index';

function FormationFormateur() {
  return (
    <div class="page-wrapper">
      <div class="content container-fluid">
        <FormateurHeader />
        <FormateurSidebar />
        {/* Page Header */}
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Courses </h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div classname="row">
          <div classname="col-sm-12">
            Contents
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class=" table table-hover  ">
                    <thead>
                      <tr>
                        <th>Invoice Number</th>
                        <th>Mentee ID</th>
                        <th>Mentee Name</th>
                        <th>Total Amount</th>
                        <th>Created Date</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="invoice.html">#IN0001</a>
                        </td>
                        <td>#01</td>
                        <td>
                          <h2 class="table-avatar">
                            <a
                              href="profile.html"
                              class="avatar avatar-sm mr-2"
                            >
                              <img
                                class="avatar-img rounded-circle"
                                src="assets/img/user/user.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="profile.html">Jonathan Doe </a>
                          </h2>
                        </td>
                        <td>$100.00</td>
                        <td>9 Sep 2019</td>
                        <td class="text-center">
                          <span class="badge badge-pill bg-success inv-badge">
                            Paid
                          </span>
                        </td>
                        <td class="text-right">
                          <div class="actions">
                            <a
                              data-toggle="modal"
                              href="#edit_invoice_report"
                              class="btn btn-sm bg-success-light mr-2"
                            >
                              <i class="fas fa-pencil-alt" /> Edit
                            </a>
                            <a
                              class="btn btn-sm bg-danger-light"
                              data-toggle="modal"
                              href="#delete_modal"
                            >
                              <i class="far fa-trash-alt" /> Delete
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
            class="modal fade"
            id="edit_invoice_report"
            aria-hidden="true"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit Invoice Report</h5>
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
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Invoice Number</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="#INV-0001"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Mentee ID</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="	#01"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Mentee Name</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="Jonathan Doe"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Mentee Image</label>
                          <input type="file" class="form-control" />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Total Amount</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="$200.00"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Created Date</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="29th Oct 2019"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
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
            class="modal fade"
            id="delete_modal"
            aria-hidden="true"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                {/*	<div class="modal-header">
						<h5 class="modal-title">Delete</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>*/}
                <div class="modal-body">
                  <div class="form-content p-2">
                    <h4 class="modal-title">Delete</h4>
                    <p class="mb-4">Are you sure want to delete?</p>
                    <button type="button" class="btn btn-primary">
                      Delete{' '}
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
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
