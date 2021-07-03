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
    <div className="page-wrapper">
      <div className="content container-fluid">
        <CentreFormationHeader />
        <CentreFormationSidebar />
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-9">
              <h3 className="page-title">Courses </h3>
              <a class="btn btn-sm  btn-outline-info " data-toggle="modal"
              href="#add">
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
                                    onClick={ ()=> Delete(f._id)}
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
          {/* ADD Modal */}
          <div
            className="modal fade"
            id="add"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">ADD</h5>
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
                          <label>Title</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Durrée</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Image</label>
                          <input type="file" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Prix</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="DT 0.00"
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
          {/* /ADD Modal */}
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
            id='delete_modal'
            aria-hidden="true"
            role="dialog"
           // onSubmit={Delete}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-content p-2">
                    <h4 className="modal-title">Delete</h4>
                    <p className="mb-4">Are you sure want to delete?</p>
                    <button  type="submit"  className="btn btn-primary">
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
export default FormationCentreFormation;
