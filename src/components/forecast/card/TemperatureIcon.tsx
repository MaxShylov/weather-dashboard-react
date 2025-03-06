import React, { type FC } from 'react';

import {
  ThermometerIcon,
  ThermometerSnowflakeIcon,
  ThermometerSunIcon,
} from 'lucide-react';

interface TemperatureIconProps {
  temp: number;
}

export const TemperatureIcon: FC<TemperatureIconProps> = ({ temp }) => {
  if (temp < 0) return <ThermometerSnowflakeIcon />;
  if (temp > 0) return <ThermometerSunIcon />;
  return <ThermometerIcon />;
};
