import React, { useEffect, useState } from "react";
import CentreFormationHeader from "../../../../components/Headers/CentreFormationHeader/index";
import CentreFormationSidebar from "../../../../components/Sidebar/CentreFormationSidebar/index";

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getCentreByIdUser,
  updateCenter,
  UploadImage,
} from "../../../../actions/index";

function Profile() {
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getCentreByIdUser(AuthUser._id));
  }, []);

  //const Centre = useSelector((state) => state.centre_formation.centre);
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
      Pays,
      Ville,
    };
    console.log(IDcardnumber);
    dispatch(updateCenter(AuthCenter._id, Centre));
    // dispatch(getCentreByIdUser(AuthUser._id));
  };

  //photo
  const [formData, setFormData] = useState("");
  const [info, setInfo] = useState({
    Photo: " ",
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: "",
  });
  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("Photo", files[0]);
    setFormData(data);
  };
  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      Photo: "",
    });
    setProgressPercent(0);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setProgressPercent(percent);
      },
    };
    dispatch(UploadImage(AuthUser._id, formData, options));
    dispatch(getCentreByIdUser(AuthUser._id));

    console.log(info.Photo);
  };

  // const image = useSelector((state) => state.getUser.image);

  return (
    <div className="main-wrapper">
      <CentreFormationHeader />
      <CentreFormationSidebar />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">My Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">My Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="profile-header">
                <div className="row align-items-center">
                  <div className="col-auto profile-image">
                    <img
                      src={`http://localhost:3000/` + AuthCenter.User.Photo}
                      className="rounded-circle upload"
                      alt="User Image"
                    />
                  </div>
                  <div className="col ml-md-n2 profile-user-info">
                    <h4 className="user-name mb-0">{Nom_centre}</h4>
                    <h6 className="text-muted">{Email}</h6>
                    <div className="pb-3">
                      <i className="fas fa-map-marker-alt" /> {Ville}{" "}
                      {Code_postal},{Pays}
                    </div>
                  </div>
                  <div className="col-auto profile-btn">
                    {error.found && (
                      <div
                        className="alert alert-danger"
                        role="alert"
                        style={{ width: "200px" }}
                      >
                        {error.message}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ width: "200px" }}>
                      <div className="progress mb-3 w-100">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: `${progressPercent}%` }}
                          aria-valuenow={progressPercent}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {progressPercent}
                        </div>
                      </div>
                      <div className="custom-file mb-3">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          onChange={upload}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile04"
                        >
                          Photo profil
                        </label>
                      </div>
                      <button type="submit" className="btn btn-info w-100">
                        Télécharger
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="profile-menu">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#per_details_tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#password_tab"
                    >
                      Password
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content profile-tab-cont">
                {/* Personal Details Tab */}
                <div className="tab-pane fade show active" id="per_details_tab">
                  {/* Personal Details */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                            <a
                              className="edit-link"
                              data-toggle="modal"
                              href="#edit_personal_details"
                            >
                              <i className="fa fa-edit mr-1" />
                              Edit
                            </a>
                          </h5>
                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                              Center Name
                            </p>
                            <p className="col-sm-10">{Nom_centre}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                              Email
                            </p>
                            <p className="col-sm-10">{Email}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                              ID Cardnumber
                            </p>
                            <p className="col-sm-10">{IDcardnumber}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                              Document_Juridique
                            </p>
                            <p className="col-sm-10">{Document_Juridique}</p>
                          </div>

                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                              Mobile
                            </p>
                            <p className="col-sm-10">{Téléphone}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted mb-0">Address</p>
                            <p className="col-sm-10 mb-0">
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
                <div id="password_tab" className="tab-pane fade">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Change Password</h5>
                      <div className="row">
                        <div className="col-md-10 col-lg-6">
                          <form>
                            <div className="form-group">
                              <label>Old Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <button className="btn btn-primary" type="submit">
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
        className="modal fade"
        id="edit_personal_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" onSubmit={handleModifier}>
            <div className="modal-header">
              <h5 className="modal-title">Personal Details</h5>
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
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>Center Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Nom_centre || ""}
                        onChange={(e) => setNom_centre(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={Email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Document Juridique </label>
                      <input
                        type="text"
                        className="form-control"
                        value={Document_Juridique || ""}
                        onChange={(e) => setDocument_Juridique(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        value={Téléphone || ""}
                        onChange={(e) => setTéléphone(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>ID cardnumber </label>
                      <input
                        type="text"
                        className="form-control"
                        value={IDcardnumber || ""}
                        onChange={(e) => setIDcardnumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <h5 className="form-title">
                      <span>Address</span>
                    </h5>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Ville || ""}
                        onChange={(e) => setVille(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={Pays || ""}
                        onChange={(e) => setPays(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label>Code Postal </label>
                      <input
                        type="text"
                        className="form-control"
                        value={Code_postal || ""}
                        onChange={(e) => setCode_postal(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  aria-hidden="true"
                >
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
