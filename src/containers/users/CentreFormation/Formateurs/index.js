import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";
import { useSelector, useDispatch } from "react-redux";
import { getContratsByIdCentre, getFormateur } from "../../../../actions/index";

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

function FormateursCentre() {
  const [Libelle, setLibelle] = useState("");
  const [etat, setEtat] = useState("");
  const [libelle, setLibell] = useState("");
  const [Etat, setEta] = useState("");

  const dispatch = useDispatch();
  const AuthCenter = JSON.parse(localStorage.getItem("Centre"));

  useEffect(() => {
    dispatch(getFormateur());
    dispatch(getContratsByIdCentre(AuthCenter._id));
  }, []);

  const Formateur = useSelector((state) => state.Formateur.Formateur);
  const m = useSelector((state) => state.Formateur.message);

  const Salles = useSelector((state) => state.salles.salles);

  var ids;
  const IdSalle = (id) => {
    ids = id;
    console.log(ids);
  };
  const Delete = () => {
    console.log(ids);
    dispatch(getContratsByIdCentre(AuthCenter._id));
  };

  var id;
  const ID = (Id) => {
    id = Id;
    console.log(id);
  };
  const Centre_formation = AuthCenter._id;

  const ADD = (e) => {
    //  e.preventDefault();
    const salle = {
      Libelle,
      etat,
      Centre_formation,
    };
  };

  return (
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="row row-grid">
            {Formateur.length > 0
              ? Formateur.map((formateur, index) => (
                  <div class="col-12 col-md-6 col-lg-3 d-flex" style={{height:'500px', width:'500px',}}>
                    <div class="card flex-fill">
                      <img
                       src="../../assets/img/user/user.jpg"
                       alt="User Image"
                        class="card-img-top img-fluid"
                        style={{height:'200px'}}
                      />
                      <div class="card-header">
                        <h6 class="card-title mb-0">
                          {formateur.Prenom} {formateur.Nom}
                        </h6>
                        {formateur.User.Email}
                       <p > {formateur.User.Téléphone}</p>
                          {formateur.User.Pays}, {formateur.User.Ville}
                      </div>
                      <div class="card-body">
                        <p style={{color:"#1e88e5"}}>Etudes_effectuees et  Expériences: </p>{formateur.Etudes_effectuees}
                        <br/>{formateur.Expériences}
                        <a class="btn btn-primary" href="#">contacter</a>
                      </div>
                    </div>
                  </div>
                ))
              : "Aucun Formateur dans la base de donnes"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormateursCentre;
