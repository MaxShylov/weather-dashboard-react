import React, { type FC } from 'react';

import { Empty } from '@/components/Empty';
import { Error } from '@/components/Error';
import { useForecast } from '@/hooks/useForecast';
import { useForecastListData } from '@/hooks/useForecastListData';
import { type ForecastParams } from '@/types';

import { Card } from './card';
import { DayLabel } from './DayLabel';
import { Skeleton } from './skeleton';
import { Title } from './Title';

import styles from './ForecastView.module.scss';

interface ForecastViewProps {
  params: ForecastParams;
}

export const ForecastView: FC<ForecastViewProps> = ({ params }) => {
  const { forecast, hasError, isLoading } = useForecast(params);

  const listData = useForecastListData(forecast);

  if (isLoading) return <Skeleton />;
  if (hasError) return <Error variant="forecast" />;
  if (!forecast) return <Empty variant="forecast" />;

  return (
    <div className={styles.forecast}>
      <Title />

      <div className={styles.list}>
        {listData.map(([date, list]) => (
          <div key={date} className={styles.listItem}>
            <DayLabel className={styles.date} date={date} />

            <div className={styles.cards}>
              {list.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
