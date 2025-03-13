import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SEARCH_HISTORY_COUNT } from '@/constants';
import { type City } from '@/types';

interface HistoryState {
  cities: City[];
}

const initialState: HistoryState = {
  cities: [],
};

const historySlice = createSlice({
  initialState,
  name: 'history',
  reducers: {
    addHistoryCity: (state, action: PayloadAction<City>) => {
      state.cities = [
        action.payload,
        ...state.cities
          .filter((city) => city.latLon !== action.payload.latLon)
          .slice(0, SEARCH_HISTORY_COUNT),
      ];
    },
  },
  selectors: {
    selectHistoryCities: (state) => state.cities,
  },
});

export const { selectHistoryCities } = historySlice.selectors;

export const { addHistoryCity } = historySlice.actions;

export default historySlice;
