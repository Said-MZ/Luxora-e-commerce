import { createSlice } from "@reduxjs/toolkit";

const themes = {
  luxury: "luxury",
  nord: "nord",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initalState = { username: "said-mz", theme: getThemeFromLocalStorage() };

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      const newTheme =
        state.theme === themes.luxury ? themes.nord : themes.luxury;
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      state.theme = newTheme;
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
