import "../../css/Navbar.css";

import { NavLink } from "react-router-dom";
import LogoutButton from "../login-components/LogoutButton";


const NavbarClient = () => { 
  function handleHamburgerMenu() {
    let hamburgerMenu = document.getElementById("hamburger-menu-div")
    if(hamburgerMenu.className === "hamburger-closed-div") {
      hamburgerMenu.className = "hamburger-opened-div"
    } else if(hamburgerMenu.className === "hamburger-opened-div") {
      hamburgerMenu.className = "hamburger-closed-div"
    }
  }

  return (
    <div id="menu-div">
      <img id="logo-img" src='/images/icon.png' alt="BOOKIFY"></img>
      <NavLink to="/" className="menu-item-link" id="shelves-link">On The Shelves</NavLink>
      <NavLink to="/my_reservations" className="menu-item-link" id="my-reservations-link">My Reservations</NavLink>
      <NavLink to="/ai_support" className="menu-item-link" id="ai-support-link">AI Support</NavLink>
      <LogoutButton tag="navbar"/>
      <img id="menu-icon-img" src="/images/side-menu-icon.png" alt="MENU" onClick={ () => { handleHamburgerMenu() }}></img>
    </div>
  );
}

export default NavbarClient;