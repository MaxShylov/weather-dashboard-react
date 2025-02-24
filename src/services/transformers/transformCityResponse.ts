import { type City, type CityResponse } from '@/types';

export const transformCityResponse = (response: CityResponse[]): City[] =>
  response.map((item) => ({
    country: item.country,
    lat: item.lat,
    latLon: `${item.lat}-${item.lon}`,
    localNames: {
      en: item.local_names?.en,
      uk: item.local_names?.uk,
    },
    lon: item.lon,
    name: item.name,
    state: item.state,
  }));
