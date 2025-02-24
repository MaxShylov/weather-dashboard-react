import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Card from 'antd/es/card';

import { CloudDrizzle, Snowflake } from 'lucide-react';

import { useUnitsLabel } from '@/hooks/useUnitsLabel';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

interface PrecipitationProps {
  rain?: number;
  snow?: number;
}

export const Precipitation: FC<PrecipitationProps> = ({ rain, snow }) => {
  const { t } = useTranslation();
  const { mm } = useUnitsLabel();

  const name = rain || snow ? 'precipitation' : 'precipitationDry';

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name={name} />}
    >
      <div className={styles.secondValue}>
        <CloudDrizzle /> {rain ?? 0} {mm}
      </div>
      <div className={styles.secondValue}>
        <Snowflake /> {snow ?? 0} {mm}
      </div>
      <div>{t('data.precipitation.lastHour')}</div>
    </Card>
  );
};
