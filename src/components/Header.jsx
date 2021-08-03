import React from 'react';
import '../assets/styles/components/Header.scss'
import LogoPlatziVideo from '../assets/static/logo-platzi-video-BW2.png';
import ProfileIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={LogoPlatziVideo} alt="platzi-video-logo" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={ProfileIcon} alt="profile-icon" />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href="/">Account</a></li>
          <li><a href="/">Log out</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;