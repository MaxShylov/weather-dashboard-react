import React, { type FC, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import AutoComplete from 'antd/es/auto-complete';
import { type InputRef } from 'antd/es/input';
import Input from 'antd/es/input/Input';

import { skipToken } from '@reduxjs/toolkit/query';

import { Loader } from '@/components/loader';
import { addHistoryCity } from '@/features/historySlice';
import { setSelectedCity } from '@/features/weatherSlice';
import { getCityLabel, getSelectedCity } from '@/helpers';
import { useAppDispatch } from '@/hooks/store';
import { useSearchCityQuery } from '@/services/weatherApi';

import styles from './SearchCity.module.scss';

export const SearchCity: FC = () => {
  const { i18n, t } = useTranslation();
  const [cityName, setCityName] = useState('');
  const [searchCityName, setSearchCityName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const debounceTimeout = useRef<NodeJS.Timeout>(null);
  const dispatch = useAppDispatch();

  const { currentData: cities, isFetching } = useSearchCityQuery(
    searchCityName || skipToken
  );

  const options = useMemo(() => {
    if (!cities || !searchCityName) return [];

    return cities.map((city) => ({
      label: getCityLabel(city, i18n.language),
      value: `${city.lat}-${city.lon}`,
    }));
  }, [cities, i18n.language, searchCityName]);

  const handleSearch = useCallback((value: string) => {
    setCityName(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(
      () => setSearchCityName(value.trim()),
      300
    );
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      const selectedCity = getSelectedCity(value, cities);

      if (!selectedCity) return;

      dispatch(setSelectedCity(selectedCity));
      dispatch(addHistoryCity(selectedCity));

      setCityName('');
      setSearchCityName('');
      inputRef.current?.blur();
    },
    [cities, dispatch]
  );

  return (
    <div className={styles.searchCity}>
      <AutoComplete
        className={styles.input}
        options={options}
        size="large"
        value={cityName}
        defaultActiveFirstOption
        onSearch={handleSearch}
        onSelect={handleSelect}
      >
        <Input
          ref={inputRef}
          placeholder={t('searchCity.placeholder')}
          size="large"
          suffix={isFetching ? <Loader /> : null}
          allowClear
        />
      </AutoComplete>
    </div>
  );
};
