import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../../actions';

function CentreFormationHeader() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="assets/img/logo-white.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="assets/img/logo-small.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </a>
        </div>
        {/* /Logo */}
        <a href="javascript:void(0);" id="toggle_btn">
          {' '}
          <FaIcons.FaBars />
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <FaIcons.FaSearch />
            </button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a className="mobile_btn" id="mobile_btn">
          {' '}
          <FaIcons.FaBars />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Flag */}
          <li className="nav-item dropdown has-arrow flag-nav mr-2">
            <a
              className="nav-link dropdown-toggle align-items-center"
              data-toggle="dropdown"
              href="#"
              role="button"
            >
             <i class="fa fa-language"></i>
              English
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt height={16} /> English
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt height={16} /> French
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt height={16} /> Spanish
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt height={16} /> German
              </a>
            </div>
          </li>
          {/* /Flag */}
          {/* Fullscreen */}
          <li className="nav-item dropdown">
            <a href="#" id="btnFullscreen" className=" ">
              <FaIcons.FaRegWindowMaximize />
            </a>
          </li>
          {/* /Fullscreen */}
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <FaIcons.FaBell /> <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {' '}
                  Clear All{' '}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Jonathan Doe</span>{' '}
                            Schedule{' '}
                            <span className="noti-title">his appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user1.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Julie Pennington</span>{' '}
                            has booked her appointment to{' '}
                            <span className="noti-title">Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user2.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tyrone Roberts</span>{' '}
                            sent a amount of $210 for his{' '}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user4.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Patricia Manzi</span>{' '}
                            send a message{' '}
                            <span className="noti-title"> to his Mentee</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          <li className="nav-item dropdown has-arrow main-drop ml-3">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <FaIcons.FaUserAlt
                  style={{
                    fontSize: '14px',
                    color: '#0c0c0c',
                    borderRadius: '50px',
                  }}
                />{' '}
                Admin
                <span className="status online" />
              </span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/formateur/profil">
                <FaIcons.FaUserAlt
                  style={{
                    fontSize: '14px',
                    color: '#0c0c0c',
                    borderRadius: '50px',
                  }}
                />
                {'  '} My Profile
              </a>
              <a className="dropdown-item" href="/login"  onClick={logout}>
                <FaIcons.FaPowerOff
                  style={{
                    fontSize: '14px',
                    color: '#0c0c0c',
                    borderRadius: '50px',
                  }}
                />
                {'  '} Logout
              </a>
            </div>
          </li>
        </ul>
        {/* /Header Right Menu */}
      </div>
  );
}
export default CentreFormationHeader;
