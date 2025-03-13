import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import { selectSelectedCity } from '@/features/weatherSlice';
import { useAppSelector } from '@/hooks/store';

import { ForecastView } from './ForecastView';

export const Forecast: FC = () => {
  const { i18n } = useTranslation();
  const selectedCity = useAppSelector(selectSelectedCity);

  if (!selectedCity) return null;

  const params = {
    lang: i18n.language,
    lat: selectedCity.lat,
    lon: selectedCity.lon,
  };

  return <ForecastView params={params} />;
};
