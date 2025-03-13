import React, { type FC, type MouseEvent, useCallback } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Button from 'antd/es/button';
import Title from 'antd/es/typography/Title';

import { Empty } from '@/components/Empty';
import { SEARCH_HISTORY_COUNT } from '@/constants';
import { selectHistoryCities } from '@/features/historySlice';
import { setSelectedCity } from '@/features/weatherSlice';
import { getCityLabel, getSelectedCity } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks/store';

import styles from './CitySearchHistory.module.scss';

export const CitySearchHistory: FC = () => {
  const { i18n, t } = useTranslation();
  const cities = useAppSelector(selectHistoryCities);
  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const selectedCity = getSelectedCity(event.currentTarget.value, cities);

      if (!selectedCity) return;

      dispatch(setSelectedCity(selectedCity));
    },
    [cities, dispatch]
  );

  if (!cities.length) return <Empty variant="history" />;

  return (
    <div>
      <Title className={styles.title} level={4}>
        {t('history.listTitle', { number: SEARCH_HISTORY_COUNT })}
      </Title>

      {cities.map((city) => (
        <div key={city.latLon} className={styles.result}>
          <span>{getCityLabel(city, i18n.language)}</span>

          <Link href="/">
            <Button value={city.latLon} onClick={handleButtonClick}>
              {t('history.listButton')}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
