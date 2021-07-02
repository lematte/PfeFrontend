import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import AdminHeader from '../../../../components/Headers/AdminHeader/index';
import SidebarAdmin from '../../../../components/Sidebar/AdminSidebar';

import {useSelector, useDispatch} from 'react-redux';
import {getFormation} from '../../../../actions/index';

function AllFormation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFormation());
  }, []);
  const formation = useSelector((state) => state.Formation.Formation);
  const m = useSelector((state) => state.Formation.message);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <AdminHeader />
        <SidebarAdmin />
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-9">
              <h3 className="page-title">Courses </h3>
              <a class="btn btn-sm  btn-outline-info " data-toggle="modal">
                <FaIcons.FaPlus /> add
              </a>
            </div>
            <div className="col-sm-3"></div>
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
                        <th>Libelle</th>
                        <th>Type</th>
                        <th>Durrée</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th className="text-center">Formateur</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formation.length > 0
                        ? formation.map((f) => (
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="invoice.html">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/user/user.jpg"
                                      alt="..."
                                    />
                                    {f.Libelle}
                                  </a>
                                </h2>
                              </td>
                              <td>{f.Type}</td>
                              <td>
                                <a href="profile.html">{f.Durrée} </a>
                              </td>
                              <td>{f.Description}</td>
                              <td>{f.Date}</td>
                              <td className="text-center">
                                <span className="badge badge-pill bg-success inv-badge">
                                  {f.Formateur.Nom} {f.Formateur.Prenom}
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
                          ))
                        : 'Aucun Formation dans la base de donnes'}
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
export default AllFormation;
