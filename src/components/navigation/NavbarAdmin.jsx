import "../../css/Navbar.css";

import { NavLink } from "react-router-dom";

import LogoutButton from "../login/LogoutButton";


const NavbarAdmin = () => { 
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
      <NavLink to="/" className="menu-item-link" id="products-link">Products</NavLink>
      <NavLink to="/reservations" className="menu-item-link" id="reservations-link">Reservations</NavLink>
      <LogoutButton tag="navbar" />
      <img id="menu-icon-img" src="/images/side-menu-icon.png" alt="MENU" onClick={ () => { handleSideMenu() }}></img>
    </div>
  );
}

export default NavbarAdmin;