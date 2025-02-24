import { useMemo } from 'react';
import dayjs from 'dayjs';

import { type DayForecast } from '@/types';

export const useForecastListData = (
  forecast: DayForecast[] | null
): [string, DayForecast[]][] =>
  useMemo(() => {
    if (!forecast) return [];

    return Object.entries(
      forecast.reduce<Record<string, DayForecast[]>>((acc, item) => {
        const date = dayjs.unix(item.dateUnix).startOf('d').format();

        if (!acc[date]) acc[date] = [];

        acc[date].push(item);

        return acc;
      }, {})
    );
  }, [forecast]);
