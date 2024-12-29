import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/HamburgerMenu.css";
import "../css/LogoutButton.css"
import "../css/Navbar.css";
import LogoutButton from './login-components/LogoutButton';

const HamburgerMenu = ({ role }) => {
  return (
    <div id="hamburger-menu-div" className="hamburger-closed-div">
      {role === 'CUSTOMER' ? (
        <>
          <NavLink to="/" className="hamburger-menu-item-link" id="hamburger-shelves-link">On The Shelves</NavLink>
          <NavLink to="/my_reservations" className="hamburger-menu-item-link" id="hamburger-my-reservations-link">My Reservations</NavLink> 
          <NavLink to="/ai_support" className="hamburger-menu-item-link" id="hamburger-ai-support-link">AI Support</NavLink>
          <div id="logout-div">
            <hr></hr>
            <LogoutButton tag="side" />
          </div>
        </>
        
      ) : (
        <>
          <NavLink to="/" className="hamburger-menu-item-link" id="hamburger-products-link">Products</NavLink>
          <NavLink to="/reservations" className="hamburger-menu-item-link" id="hamburger-reservations-link">Reservations</NavLink>
          <div id="logout-div">
            <LogoutButton tag="side" />
          </div>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;