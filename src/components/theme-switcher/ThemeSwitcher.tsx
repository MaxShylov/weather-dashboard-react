import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Button from 'antd/es/button';

import MoonOutlined from '@ant-design/icons/MoonOutlined';
import SunOutlined from '@ant-design/icons/SunOutlined';

import { toggleTheme } from '@/features/theme';
import { useAppDispatch, useTheme } from '@/hooks/store';

import styles from './ThemeSwitcher.module.scss';

const iconMap = {
  dark: <SunOutlined size={30} />,
  light: <MoonOutlined size={30} />,
};

export const ThemeSwitcher: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleThemeClick = () => dispatch(toggleTheme());

  return (
    <Button
      aria-label={t('theme.toggle')}
      className={styles.button}
      icon={iconMap[theme]}
      size="large"
      onClick={handleThemeClick}
    />
  );
};
