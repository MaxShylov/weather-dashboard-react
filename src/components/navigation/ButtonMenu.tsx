import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Button from 'antd/es/button';

import MenuOutlined from '@ant-design/icons/MenuOutlined';

export const ButtonMenu: FC = () => {
  const { t } = useTranslation();

  return (
    <Button aria-label={t('menu.label')} icon={<MenuOutlined />} size="large" />
  );
};
