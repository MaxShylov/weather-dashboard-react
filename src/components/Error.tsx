import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Alert from 'antd/es/alert/Alert';

type Variant = 'forecast' | 'weather';

interface WeatherEmptyProps {
  variant: Variant;
}

export const Error: FC<WeatherEmptyProps> = ({ variant }) => {
  const { t } = useTranslation();

  const descriptions = {
    forecast: t('errors.forecast'),
    weather: t('errors.weather'),
  };

  return (
    <Alert
      description={descriptions[variant]}
      message={t('errors.label')}
      type="error"
      closable
    />
  );
};
