import React, { useState, useEffect, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";
import { useSelector, useDispatch } from "react-redux";

import {
  getByIdCentre,
  getContratsByIdFormation,
  DeleteContrat,
} from "../../../../actions/index";

var donnees = [];

function ContratFormation() {
  const dispatch = useDispatch();
  const Centre = JSON.parse(localStorage.getItem("Centre"));
  var formationCenter = JSON.parse(localStorage.getItem("formationCenter"));

  useEffect(() => {
    if (formationCenter.length > 0) {
      console.log(formationCenter);
      formationCenter.map((f, index) =>
        dispatch(getContratsByIdFormation(f._id, donnees))
      );
    }
  }, []);
/*
  const formation = useSelector((state) => state.Formation.formations);
  useEffect(() => {
    if (formation.length > 0) {
      console.log(formation);
      formation.map((f, index) =>
        dispatch(getContratsByIdFormation(f._id, donnees))
      );
    }
  }, []);
*/  
//var donneslocal = JSON.parse(localStorage.getItem("contratformation"));

  var idC;
  const Id = (id) => {
    idC = id;
    console.log(idC);
  };
  const Delete = () => {
    console.log(idC);
    dispatch(DeleteContrat(idC));
  };      

  var donneslocal = JSON.parse(localStorage.getItem("contratformation"));
  console.log(donneslocal)
  return (
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <p className="page-title"> title</p>
                <NavLink
                  className="btn btn-sm  btn-outline-info "
                  data-toggle="modal"
                  to="#"
                >
                  <FaIcons.FaPlus /> add
                </NavLink>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              {/* Page Content */}
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="card card-table">
                      <div className="card-body">
                        {/* Invoice Table */}
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Document</th>
                                <th className="text-center">Actions</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {donneslocal && donneslocal.length > 0
                                ? donneslocal.map((f, index) =>
                                    f.map((element) => {
                                      return (
                                        <tr>
                                          <td>
                                            <NavLink to="">
                                              {element.Libelle}
                                            </NavLink>
                                          </td>
                                          <td>{element.Contrat}</td>
                                          <td className="text-center">
                                            <div className="actions">
                                              <NavLink
                                                className="btn btn-sm bg-success-light mr-2"
                                                data-toggle="modal"
                                                to="#"
                                              >
                                                <i className="fas fa-pencil-alt" />{" "}
                                                Edit
                                              </NavLink>
                                              <NavLink
                                                className="btn btn-sm bg-danger-light"
                                                data-toggle="modal"
                                                to="#delete_modal"
                                                onClick={() => Id(element._id)}
                                                data-target="#delete_modal"
                                              >
                                                <i className="far fa-trash-alt" />{" "}
                                                Delete
                                              </NavLink>
                                            </div>
                                          </td>

                                          <td className="text-center">
                                            <div className="actions">
                                              <NavLink
                                                data-toggle="modal"
                                                to="#edit_invoice_report"
                                                className="btn btn-sm bg-success-light mr-2"
                                              >
                                                <i className="fas fa-eye"></i>{" "}
                                                View
                                              </NavLink>
                                              <NavLink
                                                className="btn btn-sm bg-primary-light"
                                                data-toggle="modal"
                                                to="#delete_modal"
                                              >
                                                <i className="fas fa-print" />{" "}
                                                Print
                                              </NavLink>
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  )
                                : "vide"}
                            </tbody>
                          </table>
                        </div>
                        {/* /Invoice Table */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
            </div>
          </div>
        </div>
      </div>

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
export default ContratFormation;
