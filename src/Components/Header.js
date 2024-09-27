import React from 'react';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <header className="header">
      <div className="welcome-text">
        Welcome to <span>Jananam 2024</span>
      </div>
      <div className="profile">
        <span className="profile-name">Ajith Kumar</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-picture"
        />
        <GoogleAuth/>
       
      </div>

    </header>
  );
};

export default Header;
