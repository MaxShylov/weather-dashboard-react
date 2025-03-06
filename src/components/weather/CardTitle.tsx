import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import {
  CloudSunIcon,
  DropletOffIcon,
  DropletsIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerIcon,
  ThermometerSnowflakeIcon,
  ThermometerSunIcon,
  WindArrowDownIcon,
  WindIcon,
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
  conditions: CloudSunIcon,
  precipitation: DropletsIcon,
  precipitationDry: DropletOffIcon,
  pressure: WindArrowDownIcon,
  sunrise: SunriseIcon,
  sunset: SunsetIcon,
  temperatureNegative: ThermometerSnowflakeIcon,
  temperaturePositive: ThermometerSunIcon,
  temperatureZero: ThermometerIcon,
  wind: WindIcon,
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
