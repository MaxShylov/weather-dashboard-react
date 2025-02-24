import { type DayForecast, type ForecastResponse } from '@/types';

export const transformForecastResponse = (
  response: ForecastResponse
): DayForecast[] =>
  response.list.map((item) => ({
    clouds: item.clouds.all,
    conditionDescription: item.weather[0].description,
    conditionIcon: item.weather[0].icon,
    dateUnix: item.dt,
    humidity: item.main.humidity,
    id: item.dt,
    pressure: item.main.pressure,
    rain: item.rain?.['3h'] || 0,
    snow: item.snow?.['3h'] || 0,
    temp: Math.round(item.main.temp),
    tempFeelsLike: Math.round(item.main.feels_like),
    visibility: item.visibility,
    windDeg: item.wind.deg,
    windSpeed: item.wind.speed,
  }));
