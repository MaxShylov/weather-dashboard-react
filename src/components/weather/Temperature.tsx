import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Card from 'antd/es/card';

import { useUnitsLabel } from '@/hooks/useUnitsLabel';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

interface TemperatureProps {
  feelsLike: number;
  temperature: number;
}

export const Temperature: FC<TemperatureProps> = ({
  feelsLike,
  temperature,
}) => {
  const { t } = useTranslation();
  const { celsius } = useUnitsLabel();

  const temp = Math.round(temperature);

  const level = temp > 0 ? 'Positive' : temp < 0 ? 'Negative' : 'Zero';

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name={`temperature${level}`} />}
    >
      <div className={styles.mainValue}>
        {temp} {celsius}
      </div>
      <div>
        {t('data.temp.feelsLike')}: {Math.round(feelsLike)} {celsius}
      </div>
    </Card>
  );
};
