import React from 'react';
import * as FaIcons from 'react-icons/fa';

import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../../actions';

function CandidatHeader() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
    <div>
      <div class="header">
        {/* Logo */}
        <div class="header-left">
          <a href="index.html" class="logo">
            <img src="assets/img/logo-white.png" alt="Logo" />
          </a>
          <a href="index.html" class="logo logo-small">
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
        <div class="top-nav-search">
          <form>
            <input
              type="text"
              class="form-control"
              placeholder="Search here"
            />
            <button class="btn" type="submit">
              <FaIcons.FaSearch />
            </button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a class="mobile_btn" id="mobile_btn">
          {' '}
          <FaIcons.FaBars />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul class="nav user-menu">
          {/* Flag */}
          <li class="nav-item dropdown has-arrow flag-nav mr-2">
            <a
              class="nav-link dropdown-toggle align-items-center"
              data-toggle="dropdown"
              href="#"
              role="button"
            >
              <FaIcons.FaLanguage /> English
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="assets/img/flags/us.png" alt height={16} /> English
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="assets/img/flags/fr.png" alt height={16} /> French
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="assets/img/flags/es.png" alt height={16} /> Spanish
              </a>
              <a href="javascript:void(0);" class="dropdown-item">
                <img src="assets/img/flags/de.png" alt height={16} /> German
              </a>
            </div>
          </li>
          {/* /Flag */}
          {/* Fullscreen */}
          <li class="nav-item dropdown">
            <a href="#" id="btnFullscreen" class=" ">
              <FaIcons.FaRegWindowMaximize />
            </a>
          </li>
          {/* /Fullscreen */}
          {/* Notifications */}
          <li class="nav-item dropdown noti-dropdown">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <FaIcons.FaBell /> <span class="badge badge-pill">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <a href="javascript:void(0)" class="clear-noti">
                  {' '}
                  Clear All{' '}
                </a>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user.jpg"
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Jonathan Doe</span>{' '}
                            Schedule{' '}
                            <span class="noti-title">his appointment</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user1.jpg"
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Julie Pennington</span>{' '}
                            has booked her appointment to{' '}
                            <span class="noti-title">Ruby Perrin</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user2.jpg"
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Tyrone Roberts</span>{' '}
                            sent a amount of $210 for his{' '}
                            <span class="noti-title">appointment</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="notification-message">
                    <a href="#">
                      <div class="media">
                        <span class="avatar avatar-sm">
                          <img
                            class="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/user/user4.jpg"
                          />
                        </span>
                        <div class="media-body">
                          <p class="noti-details">
                            <span class="noti-title">Patricia Manzi</span>{' '}
                            send a message{' '}
                            <span class="noti-title"> to his Mentee</span>
                          </p>
                          <p class="noti-time">
                            <span class="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          <li class="nav-item dropdown has-arrow main-drop ml-3">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span class="user-img">
                <FaIcons.FaUserAlt
                  style={{
                    fontSize: '14px',
                    color: '#0c0c0c',
                    borderRadius: '50px',
                  }}
                />{' '}
                Admin
                <span class="status online" />
              </span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/formateur/profil">
                <FaIcons.FaUserAlt
                  style={{
                    fontSize: '14px',
                    color: '#0c0c0c',
                    borderRadius: '50px',
                  }}
                />
                {'  '} My Profile
              </a>
              <a class="dropdown-item" href="/login"  onClick={logout}>
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
    </div>
  );
}
export default CandidatHeader;
