import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type City } from '@/types';

export interface WeatherState {
  selectedCity?: City;
}

const initialState: WeatherState = {};

export const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    setWeatherSelectedCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { setWeatherSelectedCity } = weatherSlice.actions;

export default weatherSlice.reducer;
