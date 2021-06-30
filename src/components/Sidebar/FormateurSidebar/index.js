import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

function SidebarFormateur() {
  return (
    <div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                {' '}
                <span>Main</span>
              </li>
              <li className="active">
                <a href="/formateur/dashboard">
                 <FaIcons.FaHome/>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/formateur/profile">
                  <FaIcons.FaUserAlt/>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <a href="/formateur/contratformation">
                  <FaIcons.FaHandshake />
                  <span>contrat formation</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                <FaIcons.FaBook/>
                  <span> Courses</span> <span className="menu-arrow" />
                </a>
              </li>
              <li className="submenu">
                <a href="#">
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
                <a href="/login" style={{
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
    </div>
  );
}
export default SidebarFormateur;
