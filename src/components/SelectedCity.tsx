import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'antd/es/typography/Title';

import { selectSelectedCity } from '@/features/weatherSlice';
import { getCityLabel } from '@/helpers';
import { useAppSelector } from '@/hooks/store';

export const SelectedCity: FC = () => {
  const { i18n, t } = useTranslation();
  const selectedCity = useAppSelector(selectSelectedCity);

  if (!selectedCity) {
    return <div className="text-center">{t('empty.selectedCity')}</div>;
  }

  return (
    <Title className="text-center" level={3}>
      {getCityLabel(selectedCity, i18n.language)}
    </Title>
  );
};
