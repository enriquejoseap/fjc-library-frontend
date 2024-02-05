import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import BSNavbarLink from "../../components/BSNavbarLink";
import { NAVLINKS } from "../../utils/menu";
import { Link } from "react-router-dom";
import { WEBSITEROUTES } from "../../routes/routes";
import "../../assets/css/Admin.css";

const AdminHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="admin-navbar navbar-dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={WEBSITEROUTES.ADMIN.DASHBOARD}>
              Panel Administrativo
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="link-dark nav-item border-md-left">
                <Link className="nav-link" to={WEBSITEROUTES.ADMIN.RESEARCH}>
                  Investigaciones
                </Link>
              </div>
              <div className="link-dark nav-item ">
                <Link className="nav-link" to={WEBSITEROUTES.ADMIN.USER}>
                  Usuarios
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminHeader;
