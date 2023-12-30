import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Error404 from "../Error404";
import PropTypes from "prop-types";

const PrivateComponent = ({ component: Component }) => {
  let { user } = useContext(UserContext);
  let admin = user.admin === undefined || user.admin === false ? false : true;

  return admin ? <Component /> : <Error404 />;
};

PrivateComponent.propTypes = {
  component: PropTypes.func,
};

export default PrivateComponent;
