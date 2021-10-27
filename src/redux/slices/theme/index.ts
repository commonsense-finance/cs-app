import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

const defaultBgColor = '#f8f9fa'
const defaultBgSoftColor = '#ffffff'

const defaultBgDarkColor = '#0F172A'
const defaultBgDarkSoftColor = '#162031'

interface ITheme {
  darkMode: boolean
  textMode: string
  bgMode: string
  bgColor: string
  bgSoftColor: string
}

const initialState: ITheme = {
  darkMode: true,
  textMode: 'light',  
  bgMode: 'dark',
  bgColor: defaultBgDarkColor,
  bgSoftColor: defaultBgDarkSoftColor,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode 
      state.textMode = state.darkMode ? 'light' : 'dark'
      state.bgMode = state.darkMode ? 'dark' : 'light'
      state.bgColor = state.darkMode ? defaultBgDarkColor : defaultBgColor
      state.bgSoftColor = state.darkMode ? defaultBgDarkSoftColor : defaultBgSoftColor
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer;
