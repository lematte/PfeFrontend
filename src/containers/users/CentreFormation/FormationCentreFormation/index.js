import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";
import { useSelector, useDispatch } from "react-redux";

import {
  getByIdCentre,
  getCentreByIdUser,
  DeleteFormation,
  ADDFormation,
  getSalleByIdCentre,
  getFormateur
} from "../../../../actions/index";

var sallesCentre = JSON.parse(localStorage.getItem("sallesCentre"));

const salles = [
  sallesCentre && sallesCentre.length > 0
    ? sallesCentre.map((s, index) => ({
        value: s._id,
        label: s.Libelle,
      }))
    :{label:  "aucun Salle"}
];

var formatr = JSON.parse(localStorage.getItem("formateurs"));
const formateurs = [
  formatr && formatr.length > 0
    ? formatr.map((formateur, index) => ({
        value: formateur._id,
        label:
          formateur.Nom +
          " " +
          formateur.Prenom +
          " (" +
          formateur.User.Email +
          ")",
      }))
    : "aucun formateur",
];

const types = [
  {
    value: "presentielle",
    label: "présentielle",
  },
  {
    value: "en ligne",
    label: "en ligne",
  },
];

function FormationCentreFormation() {
  const [Type, setType] = useState("presentielle");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const [Libelle, setLibelle] = useState("");
  const [Image, setImage] = useState("");
  const [Durrée, setDurrée] = useState("");
  const [Date, setDate] = useState("");
  const [Heure, setHeure] = useState("");
  const [Description, setDescription] = useState("");
  const [Prix, setPrix] = useState("");
  const [Statut, setStatut] = useState("");
  const [Formateur, setFormateur] = useState("");
  const handleChangeFormateur = (event) => {
    setFormateur(event.target.value);
  };
  console.log(Formateur)
  const [Examen, setExamen] = useState("");
  const [Contrat, setContrat] = useState("");
  const [idSalle, setsalle] = useState("");
 /* const handleChangesalle = (event) => {
    setsalle(event.target.value);
  };*/
  console.log(idSalle)
  //setsalle('   ')
  const dispatch = useDispatch();
  //const AuthUser = JSON.parse(localStorage.getItem("user"));
  const AuthCenter = JSON.parse(localStorage.getItem("Centre"));
  useEffect(() => {
    // dispatch(getCentreByIdUser(AuthUser._id));
    dispatch(getByIdCentre(AuthCenter._id));
    dispatch(getSalleByIdCentre(AuthCenter._id));
    dispatch(getFormateur());
  }, []);
  //const FORMATEURS = useSelector((state) => state.Formateur.Formateur);

  // if (FORMATEURS.length > 0 ) {
  //   FORMATEURS.map((formateur, index) =>(
  /*formateurs = [
    FORMATEURS && FORMATEURS.length > 0
      ? FORMATEURS.map((formateur, index) => ({
          value: formateur._id,
          label: formateur.Nom + " " + formateur.Prenom,
        }))
      : "aucun formateur",
  ];*/
  console.log(formateurs[0]);
  console.log(salles);

  //const cntr = useSelector((state) => state.centre_formation.centre);
  //const salles = useSelector((state) => state.salles.salles);
  //donnees = salles;

  const formation = useSelector((state) => state.Formation.formations);
  const m = useSelector((state) => state.Formation.message);
  //console.log(formation);
  //console.log(donnees);

  let idf;
  const IdDelete = (id) => {
    idf = id;
    // console.log(idf);
  };

  const Delete = () => {
    // console.log(idf);
    dispatch(DeleteFormation(idf));
    dispatch(getByIdCentre(AuthCenter._id));
  };
  const Centre_formation = AuthCenter._id

  const ADD = (e) => {
    //  e.preventDefault();
    const form = {
      Libelle,
      Type,
      Durrée,
      Date,
      Heure,
      Description,
      Prix,
      Centre_formation,
      Formateur,
      idSalle,
    };
    dispatch(ADDFormation(form));
    dispatch(getByIdCentre(AuthCenter._id));
  };

  /*
const Delete = (idf) => {
  /* eslint no-restricted-globals:0 */
  /* if ( confirm(`voulez-vous vraiment supprimer cette idee`) ){
      dispatch(DeleteFormation(idf));
      dispatch(getByIdCentre(AuthCenter._id));
  }
}
*/
  return (
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />

      <div class="page-wrapper">
        <div class="content container-fluid">
          {/* Page Header */}
          <div class="page-header">
            <div class="row">
              <div class="col-sm-9">
                <h3 class="page-title">Courses </h3>
                <a
                  class="btn btn-sm   btn btn-primary "
                  data-toggle="modal"
                  href="#add"
                >
                  <FaIcons.FaPlus /> add
                </a>
              </div>
              <div class="col-sm-3"></div>
            </div>
          </div>
          {/* /Page Header */}
          <div class="row">
            <div class="col-sm-12">
              Contents
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class=" table table-hover  ">
                      <thead>
                        <tr>
                          <th>Libelle</th>
                          <th>Type</th>
                          <th>Durrée</th>
                          <th>Description</th>
                          <th>Date</th>
                          <th>Contrat</th>
                          <th class="text-center">Formateur</th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formation && formation.length > 0
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
                                  <a href="profile.html">{f.Durrée} </a>
                                </td>
                                <td>{f.Description}</td>
                                <td>{f.Date}</td>
                                <td> Contrat</td>
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
                                      href="#delete_modal"
                                      onClick={() => IdDelete(f._id)}
                                    >
                                      <i class="far fa-trash-alt" /> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          : "Aucune Formation dans la base de données"}
                      </tbody>
                    </table>
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
                  <h5 class="modal-title">Ajouter</h5>
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
                          <label>Titre</label>
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
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Durrée</label>
                          <input
                            type="text"
                            class="form-control"
                            defaultValue=""
                            value={Durrée}
                            onChange={(e) => {
                              setDurrée(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div class="form-group col-12">
                        <label>
                          Type de formation <span class="text-danger"> * </span>
                        </label>
                        <select
                          class="select select2-hidden-accessible form-control"
                          name="subcategory"
                          value={Type}
                          onChange={handleChange}
                          SelectProps={{
                            native: true
                          }}
                        >
                          {types.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {Type === "presentielle" ? (
                        <>
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label> Date</label>
                              <input
                                type="text"
                                class="form-control"
                                defaultValue="29-9-2021"
                                value={Date}
                                onChange={(e) => {
                                  setDate(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Heure</label>
                              <input
                                type="text"
                                class="form-control"
                                value={Heure}
                                onChange={(e) => {
                                  setHeure(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Salle</label>
                              <select
                                class="form-control select"
                                name="subcategory"
                                value={idSalle}
                                onChange={(event) => {
                                  setsalle(event.target.value);
                                }}
                                SelectProps={{
                                  native: true,
                                }}
                              >
                                {salles[0] && salles[0].length > 0 ? (
                                  salles[0].map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))
                                ) : (
                                  <option>
                                    Ajouter des salles{" "}
                                  </option>
                                )}
                              </select>
                            </div>
                          </div>
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Prix</label>
                              <input
                                type="text"
                                class="form-control"
                                defaultValue="0.00 DT"
                                value={Prix}
                                onChange={(e) => {
                                  setPrix(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div class="col-12">
                          <div class="form-group">
                            <label>Prix</label>
                            <input
                              type="text"
                              class="form-control"
                              defaultValue="0.00 DT"
                              value={Prix}
                              onChange={(e) => {
                                setPrix(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      )}
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Image</label>
                          <input type="file" class="form-control" />
                        </div>
                      </div>
                      <div class="col-12 col-sm-6">
                        <div class="form-group">
                          <label>Contrat</label>
                          <input type="file" class="form-control" />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Formateur</label>
                          <select
                            class="form-control select"
                            name="subcategory"
                            value={Formateur}
                            onChange={handleChangeFormateur}
                            SelectProps={{
                              native: true,
                            }}
                          >
                            {formateurs[0].map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Description</label>
                          <input
                            type="text"
                            class="form-control"
                            value={Description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      onClick={ADD}
                    >
                      Ajouter
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
                    <h5 class="modal-title"></h5>
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
                            <label>Titre</label>
                            <input
                              type="text"
                              class="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <label>Durrée</label>
                            <input
                              type="text"
                              class="form-control"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div class="form-group col-12">
                          <label>
                            Type de formation{" "}
                            <span class="text-danger"> * </span>
                          </label>
                          <select
                            class="form-control select"
                            name="subcategory"
                            value={Type}
                            onChange={handleChange}
                            SelectProps={{
                              native: true,
                            }}
                          >
                            {types.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {Type === "presentielle" ? (
                          <>
                            <div class="col-12 col-sm-6">
                              <div class="form-group">
                                <label> Date</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  defaultValue="29-9-2021"
                                />
                              </div>
                            </div>
                            <div class="col-12 col-sm-6">
                              <div class="form-group">
                                <label>Heure</label>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div class="col-12 col-sm-6">
                              <div class="form-group">
                                <label>Salle</label>
                                <input type="text" class="form-control" />
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
                          </>
                        ) : (
                          <div class="col-12">
                            <div class="form-group">
                              <label>Prix</label>
                              <input
                                type="text"
                                class="form-control"
                                defaultValue=" 0.00 DT"
                              />
                            </div>
                          </div>
                        )}
                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <label>Image</label>
                            <input type="file" class="form-control" />
                          </div>
                        </div>

                        <div class="col-12 col-sm-6">
                          <div class="form-group">
                            <label>Contrat</label>
                            <input type="file" class="form-control" />
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
        </div>
      </div>
    </div>
  );
}
export default FormationCentreFormation;
