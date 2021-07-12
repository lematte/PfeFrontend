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
 // const [show, setShow] = useState(false);
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
    //console.log(candidat);
    // console.log(getuser._id);
    dispatch(updateCandidat(AuthCandidat._id, candidat));
    dispatch(getCandidatByIdUser(AuthCandidat.User._id));
   // setShow(false);
  };

  if (localStorage.getItem('user') === undefined) {
    return <Redirect to="/login" />;
  } else {
    <Redirect to="/candidat/profile" />;
  }

  return (
    <div>
      <div class="main-wrapper">
        <CandidatHeader />
        <CandidatSidebar />
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
                          src="assets/img/profiles/avatar-12.jpg"
                        />
                      </a>
                    </div>
                    <div class="col ml-md-n2 profile-user-info">
                      <h4 class="user-name mb-0">
                        {nom} {prenom}
                      </h4>
                      <h6 class="text-muted">{email}</h6>
                      <div class="pb-3">
                        <i class="fas fa-map-marker-alt" /> {ville}, {pays}
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
                  <div
                    class="tab-pane fade show active"
                    id="per_details_tab"
                  >
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
                                Name
                              </p>
                              <p class="col-sm-10">
                                {nom} {prenom}
                              </p>
                            </div>
                            <div class="row">
                              <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                                Email ID
                              </p>
                              <p class="col-sm-10">{email}</p>
                            </div>
                            <div class="row">
                              <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                                ID Cardnumber
                              </p>
                              <p class="col-sm-10">{idcardnumber}</p>
                            </div>
                            <div class="row">
                              <p class="col-sm-2 text-muted mb-0 mb-sm-3">
                                Mobile
                              </p>
                              <p class="col-sm-10">{téléphone}</p>
                            </div>
                            <div class="row">
                              <p class="col-sm-2 text-muted mb-0">
                                Address
                              </p>
                              <p class="col-sm-10 mb-0">
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
                  <div id="password_tab" class="tab-pane fade">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Change Password</h5>
                        <div class="row">
                          <div class="col-md-10 col-lg-6">
                            <form>
                              <div class="form-group">
                                <label>Old Password</label>
                                <input
                                  type="password"
                                  class="form-control"
                                />
                              </div>
                              <div class="form-group">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  class="form-control"
                                />
                              </div>
                              <div class="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  class="form-control"
                                />
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
      </div>

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
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 ">
                    <div class="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        value={téléphone}
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
                        value={idcardnumber}
                        onChange={(e) => setIDcardnumber(e.target.value)}      
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <h5 class="form-title">
                      <span>Address</span>
                    </h5>
                  </div>
                  <div class="col-12 ">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        class="form-control"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-12 ">
                    <div class="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        class="form-control"
                        value={pays}
                        onChange={(e) => setPays(e.target.value)}
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
export default Index;
