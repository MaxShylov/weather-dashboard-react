import React, { type FC } from 'react';

import {
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
} from 'lucide-react';

interface TemperatureIconProps {
  temp: number;
}

export const TemperatureIcon: FC<TemperatureIconProps> = ({ temp }) => {
  if (temp < 0) return <ThermometerSnowflake />;
  if (temp > 0) return <ThermometerSun />;
  return <Thermometer />;
};
