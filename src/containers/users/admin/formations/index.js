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
    <div classNameName="page-wrapper">
      <div classNameName="content container-fluid">
        <AdminHeader />
        <SidebarAdmin />
        {/* Page Header */}
        <div classNameName="page-header">
          <div classNameName="row">
            <div classNameName="col-sm-9">
              <h3 classNameName="page-title">Courses </h3>
              <a class="btn btn-sm  btn-outline-info " data-toggle="modal">
                <FaIcons.FaPlus /> add
              </a>
            </div>
            <div classNameName="col-sm-3"></div>
          </div>
        </div>
        {/* /Page Header */}
        <div classNamename="row">
          <div classNamename="col-sm-12">
            Contents
            <div classNameName="card">
              <div classNameName="card-body">
                <div classNameName="table-responsive">
                  <table classNameName=" table table-hover  ">
                    <thead>
                      <tr>
                        <th>Libelle</th>
                        <th>Type</th>
                        <th>Durrée</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th classNameName="text-center">Formateur</th>
                        <th classNameName="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formation.length > 0
                        ? formation.map((f) => (
                            <tr>
                              <td>
                                <h2 classNameName="table-avatar">
                                  <a href="invoice.html">
                                    <img
                                      classNameName="avatar-img rounded-circle"
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
                              <td classNameName="text-center">
                                <span classNameName="badge badge-pill bg-success inv-badge">
                                  {f.Formateur.Nom} {f.Formateur.Prenom}
                                </span>
                              </td>
                              <td classNameName="text-right">
                                <div classNameName="actions">
                                  <a
                                    data-toggle="modal"
                                    href="#edit_invoice_report"
                                    classNameName="btn btn-sm bg-success-light mr-2"
                                  >
                                    <i classNameName="fas fa-pencil-alt" /> Edit
                                  </a>
                                  <a
                                    classNameName="btn btn-sm bg-danger-light"
                                    data-toggle="modal"
                                    href="#delete_modal"
                                  >
                                    <i classNameName="far fa-trash-alt" /> Delete
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
            classNameName="modal fade"
            id="edit_invoice_report"
            aria-hidden="true"
            role="dialog"
          >
            <div classNameName="modal-dialog modal-dialog-centered" role="document">
              <div classNameName="modal-content">
                <div classNameName="modal-header">
                  <h5 classNameName="modal-title">Edit Invoice Report</h5>
                  <button
                    type="button"
                    classNameName="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div classNameName="modal-body">
                  <form>
                    <div classNameName="row form-row">
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Invoice Number</label>
                          <input
                            type="text"
                            classNameName="form-control"
                            defaultValue="#INV-0001"
                          />
                        </div>
                      </div>
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Mentee ID</label>
                          <input
                            type="text"
                            classNameName="form-control"
                            defaultValue="	#01"
                          />
                        </div>
                      </div>
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Mentee Name</label>
                          <input
                            type="text"
                            classNameName="form-control"
                            defaultValue="Jonathan Doe"
                          />
                        </div>
                      </div>
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Mentee Image</label>
                          <input type="file" classNameName="form-control" />
                        </div>
                      </div>
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Total Amount</label>
                          <input
                            type="text"
                            classNameName="form-control"
                            defaultValue="$200.00"
                          />
                        </div>
                      </div>
                      <div classNameName="col-12 col-sm-6">
                        <div classNameName="form-group">
                          <label>Created Date</label>
                          <input
                            type="text"
                            classNameName="form-control"
                            defaultValue="29th Oct 2019"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" classNameName="btn btn-primary btn-block">
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
            classNameName="modal fade"
            id="delete_modal"
            aria-hidden="true"
            role="dialog"
          >
            <div classNameName="modal-dialog modal-dialog-centered" role="document">
              <div classNameName="modal-content">
                {/*	<div class="modal-header">
						<h5 class="modal-title">Delete</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>*/}
                <div classNameName="modal-body">
                  <div classNameName="form-content p-2">
                    <h4 classNameName="modal-title">Delete</h4>
                    <p classNameName="mb-4">Are you sure want to delete?</p>
                    <button type="button" classNameName="btn btn-primary">
                      Delete{' '}
                    </button>
                    <button
                      type="button"
                      classNameName="btn btn-danger"
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
