import BSNavbar from "./BSNavbar";
import PropTypes from "prop-types";

const Header = ({ scrollTop }) => {
  return (
    <>
      <header>
        <BSNavbar scrollTop={scrollTop} />
      </header>
    </>
  );
};

Header.propTypes = {
  scrollTop: PropTypes.number,
};

export default Header;
