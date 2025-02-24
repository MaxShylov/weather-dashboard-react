import { useTranslation } from 'next-i18next';

export const useUnitsLabel = () => {
  const { t } = useTranslation();

  return {
    celsius: t('units.celsius'),
    hPa: t('units.hPa'),
    km: t('units.km'),
    m: t('units.m'),
    metersPerSec: t('units.metersPerSec'),
    mm: t('units.mm'),
  };
};
