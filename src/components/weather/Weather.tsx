import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import { useWeatherSelectedCity } from '@/hooks/store';

import { WeatherView } from './WeatherView';

export const Weather: FC = () => {
  const { i18n } = useTranslation();
  const selectedCity = useWeatherSelectedCity();

  if (!selectedCity) return null;

  const params = {
    lang: i18n.language,
    lat: selectedCity.lat,
    lon: selectedCity.lon,
  };

  return <WeatherView params={params} />;
};
