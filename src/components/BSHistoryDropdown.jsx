import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WEBSITEROUTES } from "../config/routes";
import PropTypes from "prop-types";

const BSHistoryDropdown = ({ scrollTop }) => {
  return (
    <NavDropdown
      title="Historia"
      id={`offcanvasNavbarDropdown-expand-${"md"}`}
      className={scrollTop > 0 ? "link-light" : "link-dark"}
    >
      <ul
        className={`${
          scrollTop > 0 ? "dropdown-list-light" : "dropdown-list-dark"
        }`}
      >
        <li>
          <NavLink to={WEBSITEROUTES.BIO}>Biografía</NavLink>
        </li>
        <li>
          <NavLink to={WEBSITEROUTES.BIO}>Curriculum vitae</NavLink>
        </li>
        <li>
          <NavLink to={WEBSITEROUTES.TIMELINE}>Lnea de tiempo</NavLink>
        </li>
      </ul>
    </NavDropdown>
  );
};

BSHistoryDropdown.propTypes = {
  scrollTop: PropTypes.number,
};

export default BSHistoryDropdown;
