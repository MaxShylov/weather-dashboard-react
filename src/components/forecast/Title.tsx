import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import AntTitle from 'antd/es/typography/Title';

export const Title: FC = () => {
  const { t } = useTranslation();

  return (
    <AntTitle className="text-center" level={2}>
      {t('forecast.title')}
    </AntTitle>
  );
};
