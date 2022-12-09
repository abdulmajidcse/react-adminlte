import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../features/theme/themeSlice";
import loadingReducer from "./../features/loading/loadingSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    loading: loadingReducer,
  },
});
