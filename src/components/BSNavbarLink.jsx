import { Link } from "react-router-dom";
import ScreenContext from "../context/ScreenContext";
import { useContext } from "react";

const BSNavbarLink = ({ scrollTop, title, url, icons, targetBlank }) => {
  const { screenWidth } = useContext(ScreenContext);

  return (
    <>
      <div className={`nav-item ${scrollTop > 0 ? "link-light" : "link-dark"}`}>
        <Link
          className="nav-link"
          target={targetBlank ? "_blank" : "_self"}
          rel="noopener noreferrer"
          to={url}
        >
          {screenWidth >= 768 ? (
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
          )}
        </Link>
      </div>
    </>
  );
};

export default BSNavbarLink;
