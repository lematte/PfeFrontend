import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../../actions';

function CandidatSidebar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
    <div>
    
    <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li class="menu-title">
            {' '}
            <span>Main</span>
          </li>
          <li class="active">
            <a href="/candidat/dashboard">
             <FaIcons.FaHome/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/candidat/profile">
              <FaIcons.FaUserAlt/>
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="/candidat/subscriptions">
              <FaIcons.FaHandshake />
              <span>Subscriptions</span>
            </a>
          </li>
          <li class="submenu">
            <a href="categories">
            <FaIcons.FaBook/>
              <span> Courses</span> <span class="menu-arrow" />
            </a>
          </li>
          <li class="submenu">
            <a href="#">
            <IoIcons.IoIosPaper/>
              <span> training centers</span> 
            </a>
          </li>
          <li class="submenu">
            <a href="#">
            <FaIcons.FaEnvelopeOpenText/>
              <span> Messages</span> 
            </a>
          </li>
          <li class="menu-title">
            <span>Plus</span>
          </li>
          <li>
            <a href="profile.html">
            <IoIcons.IoMdHelpCircle/>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="settings">
            <FaIcons.FaCog/>
              <span>Settings</span>
            </a>
          </li>
          <li   >
            <a href="/login" style={{
                  color: '#e72d46'
                }} onClick={logout} >
            <FaIcons.FaPowerOff/>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  );
}
export default CandidatSidebar;
