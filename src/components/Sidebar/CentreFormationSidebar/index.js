import React , {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import '../index.css'
import { useSelector, useDispatch} from 'react-redux';
import {signout} from '../../../actions';

function CentreFormationSidebar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  
  const [sidebar, setSidebar] = useState(false);

  //const showSidebar = () => setSidebar(!sidebar);

  return (
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">
                {' '}
                <span>Main</span>
              </li>
              <li class="active">
                <a href="/centre_formations/dashboard">
                  <FaIcons.FaHome />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className={sidebar ? 'activ' : ' '}>
                <a href="/centre_formations/profile">
                  <FaIcons.FaUserAlt />
                  <span>My Profile</span>
                </a>
              </li>
              <li class="active">
                <a href="/centre_formations/contratformation">
                  <FaIcons.FaHandshake />
                  <span>contrat formation</span>
                </a>
              </li>
              <li class="active">
                <a href="/centre_formations/formations">
                  <FaIcons.FaBook />
                  <span> Courses</span>
                </a>
              </li>
              <li class="active">
                <a href="/centre_formations/salles">
                  <FaIcons.FaCube />
                  <span> Rooms </span>
                </a>
              </li>
              <li class="active">
                <a href="#">
                  <FaIcons.FaUsers />
                  <span> Trainers</span>
                </a>
              </li>
              <li class="submenu">
                <a href="#">
                  <FaIcons.FaCertificate/>
                  <span> Certificat</span>
                </a>
              </li>
              <li class="submenu">
                <a href="#">
                  <FaIcons.FaEnvelopeOpenText />
                  <span> Messages</span>
                </a>
              </li>
              <li class="submenu">
                <a href="#">
                  <IoIcons.IoIosPaper />
                  <span> training centers</span>
                </a>
              </li>
              <li class="menu-title">
                <span>Plus</span>
              </li>
              <li>
                <a href="/about">
                  <IoIcons.IoMdHelpCircle />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="settings">
                  <FaIcons.FaCog />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  onClick={logout}
                  style={{
                    BackgroundColor: 'red',
                  }}
                >
                  <FaIcons.FaPowerOff
                    style={{
                      BackgroundColor: 'Tomato',
                    }}
                  />
                  <span
                    style={{
                      BackgroundColor: 'Tomato',
                    }}
                  >
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
export default CentreFormationSidebar;
