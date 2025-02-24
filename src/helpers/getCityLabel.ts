import { type City } from '@/types';

export const getCityLabel = (city: City, language: string) => {
  let label = city.localNames[language] || city.name;

  if (city.state) label += `, ${city.state}`;
  if (city.country) label += `, ${city.country}`;

  return label;
};
