import { useUnitsLabel } from '@/hooks/useUnitsLabel';

export const useVisibilityData = (visibility: number) => {
  const { km, m } = useUnitsLabel();

  const isKm = visibility >= 1000;
  const value = isKm ? +(visibility / 1000).toFixed(2) : visibility;

  return { unit: isKm ? km : m, value };
};
