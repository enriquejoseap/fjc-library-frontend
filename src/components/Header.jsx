import BSNavbar from "./BSNavbar";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <>
      <header>
        <BSNavbar/>
      </header>
    </>
  );
};

Header.propTypes = {
  scrollTop: PropTypes.number,
};

export default Header;
