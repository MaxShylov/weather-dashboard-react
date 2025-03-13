import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type City } from '@/types';

export interface WeatherState {
  selectedCity?: City;
}

const initialState: WeatherState = {};

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    setSelectedCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
  },
  selectors: {
    selectSelectedCity: (state) => state.selectedCity,
  },
});

export const { selectSelectedCity } = weatherSlice.selectors;

export const { setSelectedCity } = weatherSlice.actions;

export default weatherSlice;
