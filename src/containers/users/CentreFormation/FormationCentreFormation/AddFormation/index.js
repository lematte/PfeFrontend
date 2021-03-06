import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import CentreFormationHeader from '../../../../../components/Headers/CentreFormationHeader/index';
import CentreFormationSidebar from '../../../../../components/Sidebar/CentreFormationSidebar/index';

import {useSelector, useDispatch} from 'react-redux';
import {getByIdCentre, getCentreByIdUser,DeleteFormation ,ADDFormation} from '../../../../../actions/index';

function FormationCentreFormation() {
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem('user'));
  const AuthCenter = JSON.parse(localStorage.getItem('Centre'));

  useEffect(() => {
    dispatch(getCentreByIdUser(AuthUser._id))
    dispatch(getByIdCentre(AuthCenter._id));
  }, []);
  const cntr = useSelector((state)=> state.centre_formation.centre)

  const formation = useSelector((state) => state.Formation.formations);
  const m = useSelector((state) => state.Formation.message);
  console.log(formation)
  console.log(cntr)


 // let {id} = useParams 


const Delete = (idf) => {
  /* eslint no-restricted-globals:0 */
  if ( confirm(`voulez-vous vraiment supprimer cette idee`) ){
      dispatch(DeleteFormation(idf));
      dispatch(getByIdCentre(AuthCenter._id));
  }
  
}
  return (
    <div class="page-wrapper">
      <div class="content container-fluid">
        <CentreFormationHeader />
        <CentreFormationSidebar />
        {/* Page Header */}
        <div class="page-header">
          <div class="row">
            <div class="col-sm-9">
              <h3 class="page-title">Courses </h3>
              <a class="btn btn-sm  btn-outline-info " data-toggle="modal"
              href="#add">
                <FaIcons.FaPlus /> add
              </a>
            </div>
            <div class="col-sm-3"></div>
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
                        <th>Libelle</th>
                        <th>Type</th>
                        <th>Durr??e</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th class="text-center">Formateur</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formation.length > 0
                        ? formation.map((f) => (
                            <tr>
                              <td>
                                <h2 class="table-avatar">
                                  <a href="invoice.html">
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/user/user.jpg"
                                      alt="..."
                                    />
                                    {f.Libelle}
                                  </a>
                                </h2>
                              </td>
                              <td>{f.Type}</td>
                              <td>
                                <a href="profile.html">{f.Durr??e} </a>
                              </td>
                              <td>{f.Description}</td>
                              <td>{f.Date}</td>
                              <td class="text-center">
                                <span class="badge badge-pill bg-success inv-badge">
                                  {f.Formateur.Nom} {f.Formateur.Prenom}
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
                                    onClick={ ()=> Delete(f._id)}
                                  >
                                      <i class="far fa-trash-alt" /> Delete
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
          {/* ADD Modal */}
          <div
            class="modal fade"
            id="add"
            aria-hidden="true"
            role="dialog"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">ADD</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">??</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="row form-row">
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Title</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Durr??e</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Image</label>
                          <input type="file" class="form-control" />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Prix</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue="DT 0.00"
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
          {/* /ADD Modal */}
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
                    <span aria-hidden="true">??</span>
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
            id='delete_modal'
            aria-hidden="true"
            role="dialog"
           // onSubmit={Delete}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-content p-2">
                    <h4 class="modal-title">Delete</h4>
                    <p class="mb-4">Are you sure want to delete?</p>
                    <button  type="submit"  class="btn btn-primary">
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
export default FormationCentreFormation;
