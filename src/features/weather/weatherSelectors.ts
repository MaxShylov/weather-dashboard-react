import { type RootState } from '@/store';

export const selectWeatherSelectedCity = (state: RootState) =>
  state.weather.selectedCity;
