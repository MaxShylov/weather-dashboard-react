import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import historySlice from '@/features/historySlice';
import themeSlice from '@/features/themeSlice';
import weatherSlice from '@/features/weatherSlice';
import weatherApi from '@/services/weatherApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history', 'theme'],
};

const rootReducerNew = combineSlices(
  themeSlice,
  weatherSlice,
  historySlice,
  weatherApi
);

const persistedReducer = persistReducer(persistConfig, rootReducerNew);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(weatherApi.middleware),
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
