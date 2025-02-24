import { type RootState } from '@/store';

export const selectHistoryCities = (state: RootState) => state.history.cities;
