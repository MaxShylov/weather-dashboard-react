import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Card from 'antd/es/card';

import { ArrowDown } from 'lucide-react';

import { useUnitsLabel } from '@/hooks/useUnitsLabel';
import { type WindData } from '@/types';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

export const Wind: FC<WindData> = ({ deg, gust, speed }) => {
  const { t } = useTranslation();
  const { metersPerSec } = useUnitsLabel();

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name="wind" />}
    >
      <div className={styles.mainValue}>
        <span>
          {speed} {metersPerSec}
        </span>
        {!!speed && (
          <ArrowDown
            className={styles.windArrow}
            style={{ rotate: `${deg}deg` }}
          />
        )}
      </div>

      {!!gust && (
        <div>
          {t('data.wind.gusts')}: {gust} {metersPerSec}
        </div>
      )}
    </Card>
  );
};
