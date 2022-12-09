import { createSlice } from "@reduxjs/toolkit";

export const themeTypes = { system: "system", dark: "dark", light: "light" };

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    // type can system or color mode
    type: themeTypes.light,
    // mode can only dark or light
    mode: themeTypes.light,
  },
  reducers: {
    switchTheme: (state, action) => {
      const THEME_KEY = "theme_type";

      // get theme type from local storage
      let getThemeType = localStorage.getItem(THEME_KEY);

      // set theme type in local storage
      if (action.payload) {
        localStorage.setItem(THEME_KEY, action.payload);
      } else if (!getThemeType) {
        localStorage.setItem(THEME_KEY, themeTypes.system);
      }

      // get theme type for update value
      getThemeType = localStorage.getItem(THEME_KEY);
      // set state type (theme type)
      state.type = getThemeType;

      // check system dark color
      const isSystemThemeDark = window.matchMedia(
        `(prefers-color-scheme: ${themeTypes.dark})`
      ).matches;

      if (
        getThemeType === themeTypes.dark ||
        (getThemeType === themeTypes.system && isSystemThemeDark)
      ) {
        // set state mode dark
        state.mode = themeTypes.dark;
      } else {
        // set state mode light
        state.mode = themeTypes.light;
      }
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
