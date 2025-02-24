import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'antd/es/typography/Title';

import { getCityLabel } from '@/helpers';
import { useWeatherSelectedCity } from '@/hooks/store';

export const SelectedCity: FC = () => {
  const { i18n, t } = useTranslation();
  const selectedCity = useWeatherSelectedCity();

  if (!selectedCity) {
    return <div className="text-center">{t('empty.selectedCity')}</div>;
  }

  return (
    <Title className="text-center" level={3}>
      {getCityLabel(selectedCity, i18n.language)}
    </Title>
  );
};
