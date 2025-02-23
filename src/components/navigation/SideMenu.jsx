import React from 'react';
import { NavLink } from "react-router-dom";
import "../../css/SideMenu.css";
import "../../css/Navbar.css";
import LogoutButton from '../login/LogoutButton';

const SideMenu = ({ role }) => {
  return (
    <div id="side-menu-div" className="side-closed-div">
      {role === 'CUSTOMER' ? (
        <>
          <NavLink to="/" className="side-menu-item-link" id="side-shelves-link">On The Shelves</NavLink>
          <NavLink to="/my_reservations" className="side-menu-item-link" id="side-my-reservations-link">My Reservations</NavLink> 
          <NavLink to="/ai_support" className="side-menu-item-link" id="side-ai-support-link">AI Support</NavLink>
          <NavLink to="/libraries" className="side-menu-item-link" id="side-libraries-link">Our Libraries</NavLink>
          <div id="logout-div">
            <hr></hr>
            <LogoutButton tag="side" />
          </div>
        </>
        
      ) : (
        <>
          <NavLink to="/" className="side-menu-item-link" id="side-products-link">Products</NavLink>
          <NavLink to="/reservations" className="side-menu-item-link" id="side-reservations-link">Reservations</NavLink>
          <div id="logout-div">
            <LogoutButton tag="side" />
          </div>
        </>
      )}
    </div>
  );
}

export default SideMenu;