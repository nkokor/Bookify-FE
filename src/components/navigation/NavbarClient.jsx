import "../../css/Navbar.css";

import { NavLink } from "react-router-dom";
import LogoutButton from "../login/LogoutButton";


const NavbarClient = () => { 
  function handleSideMenu() {
    let sideMenu = document.getElementById("side-menu-div")
    if(sideMenu.className === "side-closed-div") {
      sideMenu.className = "side-opened-div"
    } else if(sideMenu.className === "side-opened-div") {
      sideMenu.className = "side-closed-div"
    }
  }

  return (
    <div id="menu-div">
      <img id="logo-img" src='/images/icon.png' alt="BOOKIFY"></img>
      <NavLink to="/" className="menu-item-link" id="shelves-link">On The Shelves</NavLink>
      <NavLink to="/my_reservations" className="menu-item-link" id="my-reservations-link">My Reservations</NavLink>
      <NavLink to="/ai_support" className="menu-item-link" id="ai-support-link">AI Support</NavLink>
      <NavLink to="/libraries" className="menu-item-link" id="libraries-link">Our Libraries</NavLink>
      <LogoutButton tag="navbar"/>
      <img id="menu-icon-img" src="/images/side-menu-icon.png" alt="MENU" onClick={ () => { handleSideMenu() }}></img>
    </div>
  );
}

export default NavbarClient;