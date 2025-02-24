import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import AntEmpty from 'antd/es/empty';

type Variant = 'forecast' | 'history' | 'weather';

interface EmptyProps {
  variant: Variant;
}

export const Empty: FC<EmptyProps> = ({ variant }) => {
  const { t } = useTranslation();

  const descriptions = {
    forecast: t('empty.forecast'),
    history: t('empty.history'),
    weather: t('empty.weather'),
  };

  return (
    <AntEmpty
      description={descriptions[variant]}
      image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
    />
  );
};
