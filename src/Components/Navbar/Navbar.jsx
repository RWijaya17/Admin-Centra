import React from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Navbar() {
  const userName = "John Doe"; // This will come from your backend
  const userRole = "Admin"; // This will come from your backend

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder='Search' />
        </div>
        <div>
          <div className="items">
            <div className="profile">
              <div className="name">{userName}</div>
              <div className="role">{userRole}</div>
            </div>
            <div className="item">
              <img src="src/assets/pexels-lum3n-44775-406014.jpg" alt="" className='avatar' />
            </div>
            <div className="separator"></div>
            <div className="item">
              <NotificationsNoneOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <SettingsOutlinedIcon style={{ color: 'rgba(4, 49, 91, 1)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
