import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScreenContext = createContext();

export const ScreenProvider = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleScroll = () => setScrollTop(window.scrollY);
    const handleWidth = () => setScreenWidth(window.screen.width);

    //Vigila el scroll de la pantalla
    window.addEventListener("scroll", handleScroll);

    //Vigila el ancho de la pantalla
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const data = { scrollTop, screenWidth };

  return (
    <ScreenContext.Provider value={data}>
      {props.children}
    </ScreenContext.Provider>
  );
};

ScreenProvider.propTypes = {
  children: PropTypes.object,
};

export default ScreenContext;
