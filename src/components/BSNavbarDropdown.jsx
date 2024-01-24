import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import ScreenContext from "../context/ScreenContext";

const BSNavbarDropdown = ({ scrollTop, title, items, icons }) => {
  const { screenWidth } = useContext(ScreenContext);

  return (
    <NavDropdown
      title={
        screenWidth >= 768 ? (
          <img
            src={scrollTop > 0 ? icons.dark : icons.light}
            alt={title}
            title={title}
            width="50px"
            height="50px"
            className="nav-icon"
          />
        ) : (
          title
        )
      }
      id={`offcanvasNavbarDropdown-expand-${"md"}`}
      className={`${scrollTop > 0 ? "link-light" : "link-dark"}`}
    >
      <ul
        className={`${
          scrollTop > 0 ? "dropdown-list-light" : "dropdown-list-dark"
        }`}
      >
        {screenWidth >= 768 && (
          <>
            <li
              className={`${scrollTop > 0 ? "text-primary" : "text-secondary"}`}
            >
              <span>
                <b>{title}</b>
              </span>
            </li>
          </>
        )}
        <hr
          className={`${scrollTop > 0 ? "text-primary" : "text-secondary"}`}
          style={{ margin: "4px 0" }}
        />

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
  icons: PropTypes.object,
};

export default BSNavbarDropdown;
