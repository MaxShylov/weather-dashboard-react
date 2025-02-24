import { selectWeatherSelectedCity } from '@/features/weather';
import { useAppSelector } from '@/hooks/store/store';

export const useWeatherSelectedCity = () =>
  useAppSelector(selectWeatherSelectedCity);
