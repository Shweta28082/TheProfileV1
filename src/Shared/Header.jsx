import React from 'react';
import { Link } from 'react-router-dom'; 


const Header = () => {
  return (
    <div className="header">
      <a className="header__link" >Logo</a>

      <div className="header__logo" >
        <h1>The Profile</h1>
      </div>

      <nav className="nav">
      <Link className="nav__item" to="/">Home</Link>
       
      <Link className="nav__item" to="/login">Login/Signup</Link>
      </nav>
    </div>
  );
};

export default Header;
