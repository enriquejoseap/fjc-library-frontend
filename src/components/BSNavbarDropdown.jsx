import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const BSNavbarDropdown = ({ scrollTop, title, items }) => {
  return (
    <NavDropdown
      title={title}
      id={`offcanvasNavbarDropdown-expand-${"md"}`}
      className={scrollTop > 0 ? "link-light" : "link-dark"}
    >
      <ul
        className={`${
          scrollTop > 0 ? "dropdown-list-light" : "dropdown-list-dark"
        }`}
      >
        {items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </NavDropdown>
  );
};

BSNavbarDropdown.propTypes = {
  scrollTop: PropTypes.number,
  title: PropTypes.string,
  items: PropTypes.array,
};

export default BSNavbarDropdown;
