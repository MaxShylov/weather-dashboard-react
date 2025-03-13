import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: 'dark' | 'light';
}

const initialState: ThemeState = {
  value: 'dark',
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
  selectors: {
    selectTheme: (state) => state.value,
  },
});

export const { selectTheme } = themeSlice.selectors;

export const { toggleTheme } = themeSlice.actions;

export default themeSlice;
