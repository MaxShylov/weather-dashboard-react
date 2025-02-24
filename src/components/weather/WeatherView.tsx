import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

import { Empty } from '@/components/Empty';
import { Error } from '@/components/Error';
import { useWeather } from '@/hooks/useWeather';
import { type WeatherParams } from '@/types';

import { Conditions } from './Conditions';
import { Precipitation } from './Precipitation';
import { Pressure } from './Pressure';
import { Skeleton } from './skeleton';
import { Sun } from './Sun';
import { Temperature } from './Temperature';
import { Wind } from './Wind';

import styles from './WeatherView.module.scss';

interface WeatherCurrentViewProps {
  params: WeatherParams;
}

export const WeatherView: FC<WeatherCurrentViewProps> = ({ params }) => {
  const { t } = useTranslation();
  const { hasError, isLoading, weather } = useWeather(params);

  if (isLoading) return <Skeleton />;
  if (hasError) return <Error variant="weather" />;
  if (!weather) return <Empty variant="weather" />;

  return (
    <div className={styles.weatherCurrent}>
      <div className={styles.date}>
        {t('data.asOf')} {dayjs.unix(weather.dt).format('LL LTS')}
      </div>

      <div className={styles.cards}>
        <Temperature
          feelsLike={weather.main.feels_like}
          temperature={weather.main.temp}
        />
        <Wind {...weather.wind} />

        <Pressure pressure={weather.main.pressure} />

        <Precipitation
          rain={weather.rain?.['1h']}
          snow={weather.snow?.['1h']}
        />
        <Sun sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
        <Conditions
          clouds={weather.clouds.all}
          condition={weather.weather[0]}
          humidity={weather.main.humidity}
          visibility={weather.visibility}
        />
      </div>
    </div>
  );
};
