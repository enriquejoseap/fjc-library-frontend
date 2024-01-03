import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { WEBSITEROUTES } from "./config/routes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./admin/pages/Dashboard";
import Error404 from "./pages/Error404";
import UserContext from "./context/UserContext";
import Contact from "./pages/Contact";
import PrivateComponent from "./admin/components/PrivateComponent";
import AdminFooter from "./admin/components/AdminFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AdminHeader from "./admin/components/AdminHeader";

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const { user, handleAuthRedirect } = useContext(UserContext);

  let isAdminPath = location.pathname.match("/admin") ? true : false;

  useEffect(() => {
    const handleScroll = () => setScrollTop(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {isAdminPath ? <AdminHeader /> : <Header scrollTop={scrollTop} />}
        <main style={{paddingTop: "86px"}}>
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
        </main>
        {isAdminPath ? <AdminFooter /> : <Footer />}
      </BrowserRouter>
    </>
  );
}
