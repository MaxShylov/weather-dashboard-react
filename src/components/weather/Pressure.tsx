import React, { type FC } from 'react';

import Card from 'antd/es/card';

import { useUnitsLabel } from '@/hooks/useUnitsLabel';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

interface PressureProps {
  pressure: number;
}

export const Pressure: FC<PressureProps> = ({ pressure }) => {
  const { hPa } = useUnitsLabel();

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name="pressure" />}
    >
      <div className={styles.mainValue}>
        {pressure} {hPa}
      </div>
    </Card>
  );
};
