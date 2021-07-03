import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import CentreFormationHeader from '../../../../components/Headers/CentreFormationHeader/index';
import CentreFormationSidebar from '../../../../components/Sidebar/CentreFormationSidebar/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  getSalleByIdCentre,
  DeleteSalle,
  ADDSalle,
  updateSalle,
  getCentreByIdUser,
} from '../../../../actions/index';

function Salle() {
  const [Libelle, setLibelle] = useState('');
  const [etat, setEtat] = useState('');
  const [libelle, setLibell] = useState('');
  const [Etat, setEta] = useState('');

  const dispatch = useDispatch();
  const AuthCenter = JSON.parse(localStorage.getItem('Centre'));

  useEffect(() => {
    dispatch(getSalleByIdCentre(AuthCenter._id));
  }, []);
  const Salles = useSelector((state) => state.salles.salles);

  var ids;
  const IdSalle = (id) => {
    ids = id;
    console.log(ids);
  };
  const Delete = () => {
    console.log(ids);
    dispatch(DeleteSalle(ids));
    dispatch(getSalleByIdCentre(AuthCenter._id));
  };

  var id;
  const ID = (Id) => {
    id = Id;
    console.log(id);
  };
  const Update = () => {
    console.log(id);
    console.log(libelle, Etat);
    const updates = {
      libelle,
      Etat,
    };
    dispatch(updateSalle(id, updates));
    dispatch(getSalleByIdCentre(AuthCenter._id));
  };

  const Centre_formation = AuthCenter._id;

  const ADD = (e) => {
    //  e.preventDefault();
    const salle = {
      Libelle,
      etat,
      Centre_formation,
    };
    dispatch(ADDSalle(salle));
    dispatch(getSalleByIdCentre(AuthCenter._id));
  };

  return (
    <div className="page-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-9">
              <h3 className="page-title">Courses </h3>
              <a
                class="btn btn-sm  btn-outline-info "
                data-toggle="modal"
                href="#add"
              >
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
                        <th>Etat </th>
                        {/*
                      <th>Formation</th>
                        <th>Date</th>
                        <th>Heure</th>
                       */}
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Salles.length > 0
                        ? Salles.map((s) => (
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="invoice.html">{s.Libelle}</a>
                                </h2>
                              </td>
                              <td>{s.etat}</td>
                              <td className="text-center">
                                <div className="actions">
                                  <a
                                    className="btn btn-sm bg-success-light mr-2"
                                    data-toggle="modal"
                                    href="#editSalle"
                                    onClick={() => ID(s._id)}
                                  >
                                    <i className="fas fa-pencil-alt" /> Edit
                                  </a>
                                  <a
                                    className="btn btn-sm bg-danger-light"
                                    data-toggle="modal"
                                    href="#delete_modal"
                                    onClick={() => IdSalle(s._id)}
                                  >
                                    <i className="far fa-trash-alt" /> Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))
                        : 'Aucun Salle dans la base de donnes'}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="add" aria-hidden="true" role="dialog">
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
                    <div className="col-12">
                      <div className="form-group">
                        <label>Libelle</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          value={Libelle}
                          onChange={(e) => {
                            setLibelle(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Etat</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          value={etat}
                          onChange={(e) => {
                            setEtat(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={ADD}
                    data-dismiss="modal"
                  >
                    ADD
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
            id="editSalle"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit</h5>
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
                      <div className="col-12">
                        <div className="form-group">
                          <label>Libelle</label>
                          <input
                            type="text"
                            className="form-control"
                            value={libelle}
                            onChange={(e) => {
                              setLibell(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Etat</label>
                          <input
                            type="text"
                            className="form-control"
                            value={Etat}
                            onChange={(e) => {
                              setEta(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={Update}
                      data-dismiss="modal"
                    >
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
            // onSubmit={Delete}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-content p-2">
                    <h4 className="modal-title">Delete</h4>
                    <p className="mb-4">Are you sure want to delete?</p>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={Delete}
                      data-dismiss="modal"
                    >
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
export default Salle;
