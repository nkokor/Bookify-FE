import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import NavbarClient from "./components/navigation/NavbarClient";
import NavbarAdmin from "./components/navigation/NavbarAdmin";
import { useState, useEffect } from "react";
import { useAuth } from './context/AuthContext';
import { useRole } from './context/RoleContext';
import Shelves from "./components/client-components/Shelves";
import Products from "./components/admin-components/Products";
import Reservations from "./components/admin-components/Reservations";
import AISupport from "./components/client-components/ai-support/AISupport";
import MyReservations from "./components/client-components/MyReservations";
import Libraries from "./components/client-components/libraries/Libraries";
import SideMenu from "./components/navigation/SideMenu";


function App() {
  const { isAuthenticated, login } = useAuth();
  const { role, updateRole } = useRole();
  const [navbarIsVisible, setNavbarIsVisible] = useState(true);

  useEffect(() => {
    const navigationRequired = ["/", "my_reservations", "/ai_support", "/reservations", "/libraries"].includes(window.location.pathname);
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
        {navbarIsVisible && <SideMenu role={role} />}
        <Routes>
          {role === 'CUSTOMER' ? (
            <>
              <Route path="/" element={<Shelves />} />
              <Route path="/my_reservations" element={<MyReservations />} />
              <Route path="/ai_support" element={<AISupport />} />
              <Route path="/libraries" element={<Libraries />} />
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