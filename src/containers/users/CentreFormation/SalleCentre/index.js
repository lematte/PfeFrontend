import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";
import { useSelector, useDispatch } from "react-redux";
import {
  getSalleByIdCentre,
  DeleteSalle,
  ADDSalle,
  updateSalle,
  getCentreByIdUser,
} from "../../../../actions/index";

const currencies = [
  {
    value: "libre",
    label: "libre",
  },
  {
    value: "occupee",
    label: "occupée",
  },
];
function SalleCentre() {
  const [Libelle, setLibelle] = useState("");
  const [etat, setEtat] = useState("libre");
  const [libelle, setLibell] = useState("");
  const [Etat, setEta] = useState("");

  const dispatch = useDispatch();
  const AuthCenter = JSON.parse(localStorage.getItem("Centre"));

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
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div class="page-wrapper">
        <div class="content container-fluid">
          {/* Page Header */}
          <div class="row">
            <div class="col-sm-9 col-sm-12">
              <h3 class="page-title">Courses </h3>
              <a
                class="btn btn-sm  btn btn-primary"
                data-toggle="modal"
                href="#add"
              >
                <FaIcons.FaPlus /> add
              </a>
              <br />
              <br />
            </div>
          </div>
          {/* /Page Header */}
          <div classname="row">
            <div classname="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class=" table table-hover  ">
                      <thead>
                        <tr>
                          <th>Libelle</th>
                          <th>Etat </th>
                          {/*
                      <th>Formation</th>
                        <th>Date</th>
                        <th>Heure</th>
                       */}
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Salles && Salles.length > 0
                          ? Salles.map((s) => (
                              <tr>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="invoice.html">{s.Libelle}</a>
                                  </h2>
                                </td>
                                <td>{s.etat}</td>
                                <td class="text-center">
                                  <div class="actions">
                                    <a
                                      class="btn btn-sm bg-success-light mr-2"
                                      data-toggle="modal"
                                      href="#editSalle"
                                      onClick={() => ID(s._id)}
                                    >
                                      <i class="fas fa-pencil-alt" /> Edit
                                    </a>
                                    <a
                                      class="btn btn-sm bg-danger-light"
                                      data-toggle="modal"
                                      href="#delete_modal"
                                      onClick={() => IdSalle(s._id)}
                                    >
                                      <i class="far fa-trash-alt" /> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          : " Aucune Salle dans la base de données"}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* ADD Modal */}
      <div class="modal fade" id="add" aria-hidden="true" role="dialog">
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
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row form-row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>Libelle</label>
                      <input
                        type="text"
                        class="form-control"
                        defaultValue=""
                        value={Libelle}
                        onChange={(e) => {
                          setLibelle(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {/*
                        <div class="col-12">
                          <div class="form-group">
                            <label>Etat</label>
                            <input
                                type="text"
                                class="form-control"
                                value={etat}
                                onChange={(e) => {
                                 setEtat(e.target.value);
                                }}
                              />
                          </div>
                        </div> */}
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
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

      {/* Edit Details Modal */}
      <div class="modal fade" id="editSalle" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit</h5>
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
                  <div class="col-12">
                    <div class="form-group">
                      <label>Libelle</label>
                      <input
                        type="text"
                        class="form-control"
                        value={libelle}
                        onChange={(e) => {
                          setLibell(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>Etat</label>
                      {/*  <input
                        type="text"
                        class="form-control"
                        value={Etat}
                        onChange={(e) => {
                          setEta(e.target.value);
                        }}
                      /> */}
                      <select
                        class="form-control select"
                        value={Etat}
                        onChange={(e) => {
                          setEta(e.target.value);
                        }}
                      >
                        {currencies.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
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
        class="modal fade"
        id="delete_modal"
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
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={Delete}
                  data-dismiss="modal"
                >
                  Delete{" "}
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
  );
}
export default SalleCentre;
