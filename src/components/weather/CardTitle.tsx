import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import {
  CloudSun,
  DropletOff,
  Droplets,
  Sunrise,
  Sunset,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
  WindArrowDown,
} from 'lucide-react';

type Name =
  | 'conditions'
  | 'precipitation'
  | 'precipitationDry'
  | 'pressure'
  | 'sunrise'
  | 'sunset'
  | 'temperatureNegative'
  | 'temperaturePositive'
  | 'temperatureZero'
  | 'wind';

const iconMap: Record<Name, FC> = {
  conditions: CloudSun,
  precipitation: Droplets,
  precipitationDry: DropletOff,
  pressure: WindArrowDown,
  sunrise: Sunrise,
  sunset: Sunset,
  temperatureNegative: ThermometerSnowflake,
  temperaturePositive: ThermometerSun,
  temperatureZero: Thermometer,
  wind: Wind,
};

interface CardTitleProps {
  name: Name;
}

export const CardTitle: FC<CardTitleProps> = ({ name }) => {
  const { t } = useTranslation();

  const titles = {
    conditions: t('data.conditions.label'),
    precipitation: t('data.precipitation.label'),
    precipitationDry: t('data.precipitation.label'),
    pressure: t('data.pressure'),
    sunrise: t('data.sun.sunrise'),
    sunset: t('data.sun.sunset'),
    temperatureNegative: t('data.temp.label'),
    temperaturePositive: t('data.temp.label'),
    temperatureZero: t('data.temp.label'),
    wind: t('data.wind.label'),
  };

  const Icon = iconMap[name];

  return (
    <>
      <Icon /> <span>{titles[name]}</span>
    </>
  );
};
