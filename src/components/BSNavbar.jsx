import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../assets/js/routes";
import PropTypes from "prop-types";
import BSNavbarDropdown from "./BSNavbarDropdown";
import { HISTORY, PUBLICATIONS } from "../assets/js/menu";

function BSNavbar({ scrollTop }) {
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
                />
                <BSNavbarDropdown
                  scrollTop={scrollTop}
                  title={PUBLICATIONS.title}
                  items={PUBLICATIONS.items}
                />
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
