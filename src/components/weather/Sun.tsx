import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

import Card from 'antd/es/card';

import { Sunrise, Sunset } from 'lucide-react';

import { CardTitle } from './CardTitle';

import styles from './WeatherView.module.scss';

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

export const Sun: FC<SunriseSunsetProps> = ({ sunrise, sunset }) => {
  const { t } = useTranslation();

  const now = dayjs().unix();

  const isSun = now >= sunrise && now <= sunset;

  const name = isSun ? 'sunset' : 'sunrise';

  const mainValue = isSun ? sunset : sunrise;

  const secondText = !isSun ? t('data.sun.sunset') : t('data.sun.sunrise');
  const secondIcon = !isSun ? <Sunset size={16} /> : <Sunrise size={16} />;
  const secondValue = !isSun ? sunset : sunrise;

  return (
    <Card
      className={styles.card}
      size="small"
      title={<CardTitle name={name} />}
    >
      <div className={styles.mainValue}>
        {dayjs.unix(mainValue).format('HH:mm')}
      </div>
      <div className={styles.value}>
        {secondIcon} {secondText}: {dayjs.unix(secondValue).format('HH:mm')}
      </div>
    </Card>
  );
};
