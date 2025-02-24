import { createApi } from '@reduxjs/toolkit/query/react';

import {
  type City,
  type DayForecast,
  type ForecastParams,
  type Weather,
  type WeatherParams,
} from '@/types';

import { axiosBaseQuery } from './axiosBaseQuery';
import {
  transformCityResponse,
  transformForecastResponse,
} from './transformers';

export const weatherApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://api.openweathermap.org' }),
  endpoints: (builder) => ({
    getForecast: builder.query<DayForecast[], ForecastParams>({
      query: ({ lang, lat, lon }) => ({
        method: 'GET',
        params: { lang, lat, lon, units: 'metric' },
        url: '/data/2.5/forecast',
      }),
      transformResponse: transformForecastResponse,
    }),

    getWeather: builder.query<Weather, WeatherParams>({
      query: ({ lang, lat, lon }) => ({
        method: 'GET',
        params: { lang, lat, lon, units: 'metric' },
        url: '/data/2.5/weather',
      }),
    }),

    searchCity: builder.query<City[], string>({
      query: (cityName) => ({
        method: 'GET',
        params: { limit: 5, q: cityName },
        url: '/geo/1.0/direct',
      }),
      transformResponse: transformCityResponse,
    }),
  }),
  reducerPath: 'weatherApi',
});

export const { useGetForecastQuery, useGetWeatherQuery, useSearchCityQuery } =
  weatherApi;
