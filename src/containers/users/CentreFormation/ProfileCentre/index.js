import React, { useEffect, useState } from "react";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCentreByIdUser, updateCenter } from "../../../../actions/index";

function Profile() {
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getCentreByIdUser(AuthUser._id));
  }, []);

  const Centre = useSelector((state) => state.centre_formation.centre);
  const AuthCenter = JSON.parse(localStorage.getItem("Centre"));

  const [Nom_centre, setNom_centre] = useState(AuthCenter.Nom_centre);
  const [Code_postal, setCode_postal] = useState(AuthCenter.Code_postal);
  const [Document_Juridique, setDocument_Juridique] = useState(
    AuthCenter.Document_Juridique
  );

  const [Email, setEmail] = useState(AuthCenter.User.Email);
  const [Téléphone, setTéléphone] = useState(AuthCenter.User.Téléphone);
  const [IDcardnumber, setIDcardnumber] = useState(
    AuthCenter.User.IDcardnumber
  );
  const [Ville, setVille] = useState(AuthCenter.User.Ville);
  //const [Photo, setPhoto] = useState(getuser.Photo);
  const [Pays, setPays] = useState(AuthCenter.User.Pays);
  const [Password, setPassword] = useState("");

  const handleModifier = () => {
    console.log(Email);
    const Centre = {
      Nom_centre,
      Code_postal,
      Document_Juridique,
      Email,
      Téléphone,
      IDcardnumber,
      Ville,
      Password,
      Pays,
    };
    console.log(IDcardnumber);
    dispatch(updateCenter(AuthCenter._id, Centre));
  };

  return (
    <div class="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      {/* Page Wrapper */}
      <div class="page-wrapper">
        <div class="content container-fluid">
          {/* Page Header */}
          <div class="page-header">
            <div class="row">
              <div class="col">
                <h3 class="page-title">My Profile</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active">My Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div class="row">
            <div class="col-md-12">
              <div class="profile-header">
                <div class="row align-items-center">
                  <div class="col-auto profile-image">
                    <a href="#">
                      <img
                        class="rounded-circle"
                        alt="User Image"
                        src={" "}
                      />
                    </a>
                  </div>
                  <div class="col ml-md-n2 profile-user-info">
                    <h4 class="user-name mb-0">{Nom_centre}</h4>
                    <h6 class="text-muted">{Email}</h6>
                    <div class="pb-3">
                      <i class="fas fa-map-marker-alt" /> {Ville} {Pays}{" "}
                      {Code_postal}
                      {Code_postal}
                    </div>
                  </div>
                  <div class="col-auto profile-btn"></div>
                </div>
              </div>
              <div class="profile-menu">
                <ul class="nav nav-tabs nav-tabs-solid">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#per_details_tab"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#password_tab"
                    >
                      Password
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content profile-tab-cont">
                {/* Personal Details Tab */}
                <div class="tab-pane fade show active" id="per_details_tab">
                  {/* Personal Details */}
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                            <a
                              class="edit-link"
                              data-toggle="modal"
                              href="#edit_personal_details"
                            >
                              <i class="fa fa-edit mr-1" />
                              Edit
                            </a>
                          </h5>
                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                              Center Name
                            </p>
                            <p class="col-sm-10">{Nom_centre}</p>
                          </div>
                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                              Email
                            </p>
                            <p class="col-sm-10">{Email}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                              ID Cardnumber
                            </p>
                            <p class="col-sm-10">{IDcardnumber}</p>
                          </div>
                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                              Document_Juridique
                            </p>
                            <p class="col-sm-10">{Document_Juridique}</p>
                          </div>

                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                              Mobile
                            </p>
                            <p class="col-sm-10">{Téléphone}</p>
                          </div>
                          <div class="row">
                            <p class="col-sm-2 text-muted mb-0">Address</p>
                            <p class="col-sm-10 mb-0">
                              {Ville} {Code_postal}, {Pays}
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Personal Details */}
                </div>
                {/* /Personal Details Tab */}
                {/* Change Password Tab */}
                <div id="password_tab" class="tab-pane fade">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Change Password</h5>
                      <div class="row">
                        <div class="col-md-10 col-lg-6">
                          <form>
                            <div class="form-group">
                              <label>Old Password</label>
                              <input type="password" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>New Password</label>
                              <input type="password" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>Confirm Password</label>
                              <input type="password" class="form-control" />
                            </div>
                            <button class="btn btn-primary" type="submit">
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Change Password Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Edit Details Modal */}
      <div
        class="modal fade"
        id="edit_personal_details"
        aria-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" onSubmit={handleModifier}>
            <div class="modal-header">
              <h5 class="modal-title">Personal Details</h5>
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
                  <div class="col-12 ">
                    <div class="form-group">
                      <label>Center Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={Nom_centre || ""}
                        onChange={(e) => setNom_centre(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 ">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value={Email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>Document Juridique </label>
                      <input
                        type="text"
                        class="form-control"
                        value={Document_Juridique || ""}
                        onChange={(e) => setDocument_Juridique(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        value={Téléphone || ""}
                        onChange={(e) => setTéléphone(e.target.value)}
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>ID cardnumber </label>
                      <input
                        type="text"
                        class="form-control"
                        value={IDcardnumber || ""}
                        onChange={(e) => setIDcardnumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <h5 class="form-title">
                      <span>Address</span>
                    </h5>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        class="form-control"
                        value={Ville || ""}
                        onChange={(e) => setVille(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        class="form-control"
                        value={Pays || ""}
                        onChange={(e) => setPays(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label>Code Postal </label>
                      <input
                        type="text"
                        class="form-control"
                        value={Code_postal || ""}
                        onChange={(e) => setCode_postal(e.target.value)}
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
    </div>
  );
}
export default Profile;
