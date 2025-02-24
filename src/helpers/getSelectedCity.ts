import { type City } from '@/types';

export const getSelectedCity = (
  latLon: string,
  cities?: City[]
): City | undefined => {
  const [latString, lonString] = latLon.split('-');

  const lat = parseFloat(latString);
  const lon = parseFloat(lonString);

  if (isNaN(lat) || isNaN(lon)) {
    return;
  }

  const selectedCity = cities?.find(
    (city) => city.lat === lat && city.lon === lon
  );

  if (!selectedCity) return;

  return selectedCity;
};
