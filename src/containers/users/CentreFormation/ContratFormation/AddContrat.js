import React, { useRef, useState, useEffect, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";
import { useSelector, useDispatch } from "react-redux";

import {
  getByIdCentre,
  getContratsByIdFormation,
  DeleteContrat,
} from "../../../../actions/index";

function AddContrat() {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PDFExport ref={pdfExportComponent} paperSize="A4"
          margin={40}
          fileName={`Contrat-formation-${new Date().getTime()}`}
          author="KendoReact Team">
            <div>
              <br />
              <h5 style={{ textAlign: "center" }}>Nom Formation</h5>
              <hr />
              <div>
                <div class="row form-row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Title</label>
                      <input type="text" class="form-control" defaultValue="" />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Durrée</label>
                      <input type="text" class="form-control" defaultValue="" />
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
              </div>
            </div>
          </PDFExport>
          <NavLink
            className="btn-primary"
            style={{ padding: "7px 20px 7px 20px" }}
            onClick={handleExportWithComponent}
            to="#"
          >
            <i className="fas fa-export" /> Export
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default AddContrat;
