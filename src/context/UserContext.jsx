import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { WEBSITEROUTES } from "../routes/routes";

const UserContext = createContext();

const initialAuth = { admin: true };

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialAuth);

  const handleAuth = () => {
    if (user) {
      setUser({});
    } else {
      setUser({
        name: "enriquejoseap",
        email: "enriquejoseap@gmail.com",
        admin: true,
      });
    }
  };

  const handleAuthRedirect = (route) => {
    return user ? route : WEBSITEROUTES.SIGNIN;
  };

  const data = { user, handleAuth, handleAuthRedirect };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};

export default UserContext;
