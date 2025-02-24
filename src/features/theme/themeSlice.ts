import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: 'dark' | 'light';
}

const initialState: ThemeState = {
  value: 'dark',
};

export const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
