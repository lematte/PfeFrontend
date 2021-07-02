import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../../actions';

function AdminSidebar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title">
            {' '}
            <span>Main</span>
          </li>
          <li className="active">
            <a href="/admin/dashboard">
             <FaIcons.FaHome/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/admin/profile">
              <FaIcons.FaUserAlt/>
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="/admin/categories">
              <FaIcons.FaHandshake />
              <span>Subscriptions</span>
            </a>
          </li>
          <li>
            <a href="/admin/formations">
            <FaIcons.FaBook/>
              <span> Courses</span> 
            </a>
          </li>
          <li className="submenu">
            <a href="/admin/">
            <IoIcons.IoIosPaper/>
              <span> training centers</span> 
            </a>
          </li>
          <li className="submenu">
            <a href="#">
            <FaIcons.FaEnvelopeOpenText/>
              <span> Messages</span> 
            </a>
          </li>
          <li className="menu-title">
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
            <a href="/login" onClick={logout} style={{
                  BackgroundColor: 'red'
                }}>
            <FaIcons.FaPowerOff style={{
                  BackgroundColor: 'Tomato'
                }}/>
              <span style={{
                  BackgroundColor: 'Tomato'
                }} >Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

    );
}
export default AdminSidebar;
