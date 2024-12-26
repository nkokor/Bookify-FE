import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/login-components/LoginForm";
import NavbarClient from "./components/client-components/NavbarClient";
import NavbarAdmin from "./components/admin-components/NavbarAdmin";
import HamburgerMenu from "./components/HamburgerMenu";
import { useState, useEffect } from "react";
import { useAuth } from './context/AuthContext';
import { useRole } from './context/RoleContext';
import Shelves from "./components/client-components/Shelves";
import Products from "./components/admin-components/Products";
import Reservations from "./components/admin-components/Reservations";
import AISupport from "./components/client-components/AISupport";
import Home from "./components/client-components/Home";
import MyReservations from "./components/client-components/MyReservations";
import BookifyBot from "./components/client-components/BookifyBot";


function App() {
  const { isAuthenticated, login } = useAuth();
  const { role, updateRole } = useRole();
  const [navbarIsVisible, setNavbarIsVisible] = useState(true);

  useEffect(() => {
    const navigationRequired = ["/", "/shelves", "my_reservations", "/ai_support", "bookifybot", "/reservations"].includes(window.location.pathname);
    setNavbarIsVisible(navigationRequired);
  }, []);

  const handleLogin = (loginData) => {
    login(loginData);
    if (loginData.role) {
      updateRole(loginData.role);
    }
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {navbarIsVisible && (role === 'CUSTOMER' ? <NavbarClient /> : <NavbarAdmin />)}
        {navbarIsVisible && <HamburgerMenu role={role} />}
        <Routes>
          {role === 'CUSTOMER' ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/shelves" element={<Shelves />} />
              <Route path="/my_reservations " element={<MyReservations />} />
              <Route path="/ai_support" element={<AISupport />} />
              <Route path="/bookifybot" element={<BookifyBot />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Products />} />
              <Route path="/reservations" element={<Reservations />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;