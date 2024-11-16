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
import Books from "./components/admin-components/Books";
import Reservations from "./components/admin-components/Reservations";
import AISupport from "./components/client-components/AISupport";
import Home from "./components/client-components/Home";


function App() {
  const { isAuthenticated, login } = useAuth();
  const { role, updateRole } = useRole();
  const [navbarIsVisible, setNavbarIsVisible] = useState(true);

  useEffect(() => {
    const navigationRequired = ["/", "/shelves", "/ai_support", "/books", "/reservations"].includes(window.location.pathname);
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
        {navbarIsVisible && (role === 'CLIENT' ? <NavbarClient /> : <NavbarAdmin />)}
        {navbarIsVisible && <HamburgerMenu role={role} />}
        <Routes>
          {role === 'CLIENT' ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/shelves" element={<Shelves />} />
              <Route path="/ai_support" element={<AISupport />} />
            </>
          ) : (
            <>
              <Route path="/books" element={<Books />} />
              <Route path="/reservations" element={<Reservations />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;