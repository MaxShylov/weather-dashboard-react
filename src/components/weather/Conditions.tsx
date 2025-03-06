import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import Card from 'antd/es/card';

import { BinocularsIcon, CloudyIcon, DropletIcon } from 'lucide-react';

import { ConditionImage } from '@/components/condition-image';
import { upperFirst } from '@/helpers';
import { useVisibilityData } from '@/hooks/useVisibilityData';
import { type WeatherCondition } from '@/types';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

interface ConditionsProps {
  clouds: number;
  condition: WeatherCondition;
  humidity: number;
  visibility: number;
}

export const Conditions: FC<ConditionsProps> = ({
  clouds,
  condition,
  humidity,
  visibility,
}) => {
  const { t } = useTranslation();

  const visibilityData = useVisibilityData(visibility);

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name="conditions" />}
    >
      <div className={clsx(styles.secondValue, styles.condition)}>
        <ConditionImage
          description={condition.description}
          icon={condition.icon}
        />
        <div className={styles.conditionsDescription}>
          {upperFirst(condition.description)}
        </div>
      </div>

      <div className={styles.value}>
        <DropletIcon size={16} /> {t('data.conditions.humidity')}: {humidity} %
      </div>
      <div className={styles.value}>
        <CloudyIcon size={16} /> {t('data.conditions.cloudiness')}: {clouds} %
      </div>
      <div className={styles.value}>
        <BinocularsIcon size={16} /> {t('data.conditions.visibility')}:{' '}
        {visibilityData.value} {visibilityData.unit}
      </div>
    </Card>
  );
};
