import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { historyReducer } from '@/features/history';
import { themeReducer } from '@/features/theme';
import { weatherReducer } from '@/features/weather';
import { weatherApi } from '@/services/weatherApi';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history', 'theme'],
};

const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
  weather: weatherReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
