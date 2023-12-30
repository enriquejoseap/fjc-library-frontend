import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { WEBSITEROUTES } from "./config/routes";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Error404 from "./pages/Error404";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import Contact from "./pages/Contact";
import PrivateComponent from "./pages/admin/PrivateComponent";
import AdminFooter from "./templates/AdminFooter";
import Footer from "./templates/Footer";

export default function App() {
  const { user, handleAuthRedirect, handleAdmin } = useContext(UserContext);

  let isAdminPath = location.pathname.match("/admin") ? true : false;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={WEBSITEROUTES.HOME} element={<Home />} />
          <Route path={WEBSITEROUTES.SIGNIN} element={<Login />} />
          <Route path={WEBSITEROUTES.SIGNUP} element={<SignUp />} />
          <Route
            path={handleAuthRedirect(WEBSITEROUTES.CONTACT)}
            element={<Contact />}
          />

          {/* Rutas privadas */}
          <Route
            path={WEBSITEROUTES.ADMIN.DASHBOARD}
            element={<PrivateComponent component={Dashboard} />}
          />

          {/* 404 */}
          <Route path={WEBSITEROUTES.ERROR404} element={<Error404 />} />
        </Routes>
        {isAdminPath ? <AdminFooter /> : <Footer />}
      </BrowserRouter>
    </>
  );
}
