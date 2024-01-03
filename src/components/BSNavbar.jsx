import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { WEBSITEROUTES } from "../config/routes";
import { COLORS } from "../config/colors";
import PropTypes from "prop-types";
import BSHistoryDropdown from "./BSHistoryDropdown";

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
        fixed="top"
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
                {/* <span style={{ color: COLORS.RED }}>Biblioteca Digital</span>
                <br />
                <span style={{ color: COLORS.ORANGE }}>Jacinto Convit</span> */}
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
                <BSHistoryDropdown scrollTop={scrollTop} />
                <Nav.Link href="#action1">Link</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
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
