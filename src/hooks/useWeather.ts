import { useEffect, useState } from 'react';

import { useGetWeatherQuery } from '@/services/weatherApi';
import { type Weather, type WeatherParams } from '@/types';

interface UseWeatherReturn {
  hasError: boolean;
  isLoading: boolean;
  weather: Weather | null;
}

export const useWeather = (params: WeatherParams): UseWeatherReturn => {
  const [weather, setWeather] = useState<Weather | null>(null);

  const { data, error, isFetching } = useGetWeatherQuery(params);

  const isLoading = isFetching && !weather;

  useEffect(() => {
    setWeather(null);
  }, [params.lat, params.lon]);

  useEffect(() => {
    if (data) setWeather(data);
  }, [data]);

  return { hasError: !!error, isLoading, weather };
};
