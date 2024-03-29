import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { WEBSITEROUTES } from "./routes/routes";
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
import { ScreenProvider } from "./context/ScreenContext";
import TimeLine from "./pages/TimeLine";
import Biography from "./pages/Biography";
import Curriculum from "./pages/Curriculum";
import Research from "./pages/Research";
import Article from "./pages/ArticleDetails";
import Donations from "./pages/Donations";
import AdminResearch from "./admin/pages/AdminResearch";
import AdminUsers from "./admin/pages/AdminUsers";

export default function App() {
  const { user, handleAuthRedirect } = useContext(UserContext);

  let isAdminPath = location.pathname.match("/admin") ? true : false;

  return (
    <>
      {/* Contexto de los cambios en la pantalla */}
      <ScreenProvider>
        <BrowserRouter>
          {isAdminPath ? <AdminHeader /> : <Header />}
          <main>
            <Routes>
              <Route path={WEBSITEROUTES.HOME} element={<Home />} />
              <Route path={WEBSITEROUTES.BIO} element={<Biography />} />
              <Route path={WEBSITEROUTES.TIMELINE} element={<TimeLine />} />
              <Route path={WEBSITEROUTES.CURRICULUM} element={<Curriculum />} />
              <Route path={WEBSITEROUTES.RESEARCH} element={<Research />} />
              <Route path={WEBSITEROUTES.DONATIONS} element={<Donations />} />
              <Route
                path={`${WEBSITEROUTES.RESEARCH}/:id`}
                element={<Article />}
              />
              <Route path={WEBSITEROUTES.SIGNIN} element={<Login />} />
              <Route path={WEBSITEROUTES.SIGNUP} element={<SignUp />} />
              <Route
                path={handleAuthRedirect(WEBSITEROUTES.CONTACT)}
                element={<Contact />}
              />

              {/* Rutas privadas */}
              {user.role == "admin" && (
                <>
                  <Route
                    path={WEBSITEROUTES.ADMIN.DASHBOARD}
                    element={<Dashboard />}
                  />
                  <Route
                    path={WEBSITEROUTES.ADMIN.RESEARCH}
                    element={<AdminResearch />}
                  />
                  <Route
                    path={WEBSITEROUTES.ADMIN.USER}
                    element={<AdminUsers />}
                  />
                </>
              )}

              {/* 404 */}
              <Route path={WEBSITEROUTES.ERROR404} element={<Error404 />} />
            </Routes>
          </main>
          {isAdminPath ? <AdminFooter /> : <Footer />}
        </BrowserRouter>
      </ScreenProvider>
    </>
  );
}
