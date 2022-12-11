import { useSelector, useDispatch } from "react-redux";
import { switchTheme, themeTypes } from "./themeSlice";
import { useEffect } from "react";

export default function Theme({ style = {} }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchTheme());
  }, [dispatch]);

  return (
    <>
      <span className="nav-link" style={style}>
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
