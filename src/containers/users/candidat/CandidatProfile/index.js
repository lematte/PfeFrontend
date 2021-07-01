import React, {useEffect, useState} from 'react';
import CandidatSidebar from '../../../../components/Sidebar/CandidatSidebar/index';
import CandidatHeader from '../../../../components/Headers/CandidatHeader/index';
//redux
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateCandidat, getCandidatByIdUser} from '../../../../actions/index';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('Candidat') === undefined) {
      return <Redirect to="/login" />;
    } else {
      <Redirect to="/candidat/profile" />;
    }
    // dispatch(getCandidatByIdUser(usr._id));
  }, []);

  if (localStorage.getItem('Candidat') === undefined) {
    <Redirect to="/login" />;
  } else {
    <Redirect to="/candidat/profile" />;
  }
  const AuthCandidat = JSON.parse(localStorage.getItem('Candidat'));
  const [show, setShow] = useState(false);
  const [prenom, setPrenom] = useState(AuthCandidat.Prenom);
  const [email, setEmail] = useState(AuthCandidat.User.Email);
  const [genre, setGenre] = useState(AuthCandidat.Genre);
  const [téléphone, setTéléphone] = useState(AuthCandidat.User.Téléphone);
  const [idcardnumber, setIDcardnumber] = useState(
    AuthCandidat.User.IDcardnumber
  );
  const [ville, setVille] = useState(AuthCandidat.User.Ville);
  const [nom, setNom] = useState(AuthCandidat.Nom);
  //const [Photo, setPhoto] = useState(getuser.Photo);
  const [pays, setPays] = useState(AuthCandidat.User.Pays);
  const [password, setPassword] = useState('');

  const handleModifier = () => {
    console.log(email);
    const candidat = {
      nom,
      prenom,
      email,
      genre,
      téléphone,
      idcardnumber,
      ville,
      password,
      pays,
    };
    console.log(candidat);
    // console.log(getuser._id);
    dispatch(updateCandidat(AuthCandidat._id, candidat));
    dispatch(getCandidatByIdUser(AuthCandidat.User._id));
    setShow(false);
  };

  if (localStorage.getItem('user') === undefined) {
    return <Redirect to="/login" />;
  } else {
    <Redirect to="/candidat/profile" />;
  }

  return (
    <div>
      <div className="main-wrapper">
        <CandidatHeader />
        <CandidatSidebar />
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
                      <a href="#">
                        <img
                          className="rounded-circle"
                          alt="User Image"
                          src="assets/img/profiles/avatar-12.jpg"
                        />
                      </a>
                    </div>
                    <div className="col ml-md-n2 profile-user-info">
                      <h4 className="user-name mb-0">
                        {nom} {prenom}
                      </h4>
                      <h6 className="text-muted">{email}</h6>
                      <div className="pb-3">
                        <i className="fas fa-map-marker-alt" /> {ville}, {pays}
                      </div>
                    </div>
                    <div className="col-auto profile-btn"></div>
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
                  <div
                    className="tab-pane fade show active"
                    id="per_details_tab"
                  >
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
                                Name
                              </p>
                              <p className="col-sm-10">
                                {nom} {prenom}
                              </p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Email ID
                              </p>
                              <p className="col-sm-10">{email}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                ID Cardnumber
                              </p>
                              <p className="col-sm-10">{idcardnumber}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0 mb-sm-3">
                                Mobile
                              </p>
                              <p className="col-sm-10">{téléphone}</p>
                            </div>
                            <div className="row">
                              <p className="col-sm-2 text-muted mb-0">
                                Address
                              </p>
                              <p className="col-sm-10 mb-0">
                                {ville}, {pays}
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
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
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
      </div>

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
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        value={téléphone}
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
                        value={idcardnumber}
                        onChange={(e) => setIDcardnumber(e.target.value)}      
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <h5 className="form-title">
                      <span>Address</span>
                    </h5>
                  </div>
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        value={pays}
                        onChange={(e) => setPays(e.target.value)}
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
    </div>
  );
}
export default Index;
