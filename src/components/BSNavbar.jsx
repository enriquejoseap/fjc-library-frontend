import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../routes/routes";
import PropTypes from "prop-types";
import BSNavbarDropdown from "./BSNavbarDropdown";
import { HISTORY, LIBRARIAN, NAVLINKS, PUBLICATIONS } from "../utils/menu";
import { useContext, useState } from "react";
import ScreenContext from "../context/ScreenContext";
import BSNavbarLink from "./BSNavbarLink";
import UserContext from "../context/UserContext";

function BSNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { scrollTop } = useContext(ScreenContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar
        expand={"md"}
        className={`mb-3 ${
          scrollTop > 0
            ? "website-navbar-light navbar-light"
            : "website-navbar-dark navbar-dark"
        }`}
      >
        <Container fluid>
          <Navbar.Brand>
            <Col className="my-auto" md>
              <Link to={WEBSITEROUTES.HOME}>
                <img
                  height={"58px"}
                  width={"180px"}
                  src={`${
                    scrollTop > 0
                      ? "/icons/logo-primario.png"
                      : "/icons/logo-light.png"
                  }`}
                  alt="Fundacion Jacinto Convit"
                />
              </Link>
            </Col>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
            className={`${
              scrollTop > 0 ? "offcanvasNavbar-light" : "offcanvasNavbar-dark"
            }`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <Link to={WEBSITEROUTES.HOME}>
                  <img
                    height={"58px"}
                    width={"180px"}
                    src={`${
                      scrollTop > 0
                        ? "/icons/logo-primario.png"
                        : "/icons/logo-light.png"
                    }`}
                    alt="Fundacion Jacinto Convit"
                  />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                {/* Dropdowns */}

                <BSNavbarDropdown
                  scrollTop={scrollTop}
                  title={HISTORY.title}
                  items={HISTORY.items}
                  icons={HISTORY.icons}
                />
                <BSNavbarDropdown
                  scrollTop={scrollTop}
                  title={PUBLICATIONS.title}
                  items={PUBLICATIONS.items}
                  icons={PUBLICATIONS.icons}
                />

                {/* Links */}

                <BSNavbarLink
                  scrollTop={scrollTop}
                  title={NAVLINKS.donations.title}
                  url={NAVLINKS.donations.url}
                  icons={NAVLINKS.donations.icons}
                  targetBlank={false}
                />
                <BSNavbarLink
                  scrollTop={scrollTop}
                  title={NAVLINKS.librarian.title}
                  url={NAVLINKS.librarian.url}
                  icons={NAVLINKS.librarian.icons}
                  targetBlank={true}
                />
                {user.role == "admin" && (
                  <BSNavbarLink
                    scrollTop={scrollTop}
                    title={NAVLINKS.admin.title}
                    url={NAVLINKS.admin.url}
                    icons={NAVLINKS.admin.icons}
                    targetBlank={true}
                  />
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

BSNavbar.propTypes = {
  scrollTop: PropTypes.number,
};

export default BSNavbar;
