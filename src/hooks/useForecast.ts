import { useEffect, useState } from 'react';

import { useGetForecastQuery } from '@/services/weatherApi';
import { type DayForecast, type ForecastParams } from '@/types';

interface UseForecastReturn {
  forecast: DayForecast[] | null;
  hasError: boolean;
  isLoading: boolean;
}

export const useForecast = (params: ForecastParams): UseForecastReturn => {
  const [forecast, setForecast] = useState<DayForecast[] | null>(null);

  const { data, error, isFetching } = useGetForecastQuery(params);

  const isLoading = isFetching && !forecast;

  useEffect(() => {
    setForecast(null);
  }, [params.lat, params.lon]);

  useEffect(() => {
    if (data) setForecast(data);
  }, [data]);

  return { forecast, hasError: !!error, isLoading };
};
