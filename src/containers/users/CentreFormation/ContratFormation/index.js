import React, {useState, useEffect, useMemo} from 'react';
import * as FaIcons from 'react-icons/fa';

import CentreFormationHeader from '../../../../components/Headers/CentreFormationHeader/index';
import CentreFormationSidebar from '../../../../components/Sidebar/CentreFormationSidebar/index';

import {useSelector, useDispatch} from 'react-redux';

import {
  getByIdCentre,
  getContratsByIdFormation,
} from '../../../../actions/index';
var donnees = [];
function ContratFormation() {
  const dispatch = useDispatch();
  const Centre = JSON.parse(localStorage.getItem('Centre'));

  useMemo(() => {
    dispatch(getByIdCentre(Centre._id));
  }, []);
  
  const formation = useSelector((state) => state.Formation.formations);
  console.log(formation);
  
  useEffect(() => {
    if (formation.length > 0) {
      formation.map(
        (f, index) => (
          dispatch(getContratsByIdFormation(f._id, donnees))
        )
      );
    }
  }, []);

  var donneslocal = JSON.parse(localStorage.getItem('contratformation'));
  /*
  const comp = donneslocal.length;
  if (comp > 0) {
    var m = donneslocal.map((f, index) =>
      f.map((element) => {
        console.log(element);
        console.log(element._id)
      })
    );
  }*/
  // const tabContrat = JSON.parse(localStorage.getItem('ContratFormation'))

  //tabContrat = tabContrat.concat(tabContrat)
  // console.log(tabContrat)
  return (
    <div className="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div class="page-wrapper">
        <div class="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <p className="page-title">
                  X
                  {
                  (donneslocal.length > 0) ?(
                    donneslocal.map((f, index) =>
                    f.map((element) => {
                     return (
                     <p>
                         {element._id}
                         </p>
                        )
                    }))
                  ): "vide"
                 }
                </p>
                <a
                  class="btn btn-sm  btn-outline-info "
                  data-toggle="modal"
                  href="#add"
                >
                  <FaIcons.FaPlus /> add
                </a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div classname="row">
            <div classname="col-sm-12">
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
                              <tr>
                                <td>
                                  <a href="invoice-view.html">Libelle</a>
                                </td>
                                <td>Document</td>
                                <td className="text-center">
                                  <div className="actions">
                                    <a
                                      className="btn btn-sm bg-success-light mr-2"
                                      data-toggle="modal"
                                      href="#editSalle"
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

                                <td class="text-center">
                                  <div class="actions">
                                    <a
                                      data-toggle="modal"
                                      href="#edit_invoice_report"
                                      class="btn btn-sm bg-success-light mr-2"
                                    >
                                      <i class="fas fa-eye"></i> View
                                    </a>
                                    <a
                                      class="btn btn-sm bg-primary-light"
                                      data-toggle="modal"
                                      href="#delete_modal"
                                    >
                                      <i className="fas fa-print" /> Print
                                    </a>
                                  </div>
                                </td>
                              </tr>
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
    </div>
  );
}
export default ContratFormation;
