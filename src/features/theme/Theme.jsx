import { useSelector, useDispatch } from "react-redux";
import { switchTheme, themeTypes } from "./themeSlice";
import { useEffect } from "react";
import $ from "jquery";

export default function Theme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // set dar-mode class in body tag
  $(function () {
    if (theme.mode === themeTypes.dark) {
      $("body").addClass("dark-mode");
    } else {
      $("body").removeClass("dark-mode");
    }
  });

  useEffect(() => {
    dispatch(switchTheme());
  }, [dispatch]);

  return (
    <>
      <span className="nav-link">
        <i
          className={`fas fa-adjust ${
            theme.type !== themeTypes.system && "d-none"
          }`}
          title="Switch to dark mode"
          role="button"
          onClick={() => dispatch(switchTheme("dark"))}
        />
        <i
          className={`fas fa-sun ${
            theme.type !== themeTypes.light && "d-none"
          }`}
          title="Switch to system theme"
          role="button"
          onClick={() => dispatch(switchTheme("system"))}
        />
        <i
          className={`fas fa-moon ${
            theme.type !== themeTypes.dark && "d-none"
          }`}
          title="Switch to light mode"
          role="button"
          onClick={() => dispatch(switchTheme("light"))}
        />
      </span>
    </>
  );
}
