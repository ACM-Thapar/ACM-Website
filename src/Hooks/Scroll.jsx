import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    //zoom out
    document.body.style.zoom = "100%";
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
