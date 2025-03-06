import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import { MoonIcon, SunIcon } from 'lucide-react';

import { ButtonIcon } from '@/components/button-icon';
import { toggleTheme } from '@/features/theme';
import { useAppDispatch, useTheme } from '@/hooks/store';

const iconMap = {
  dark: <SunIcon />,
  light: <MoonIcon />,
};

export const ThemeSwitcher: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleThemeClick = () => dispatch(toggleTheme());

  return (
    <ButtonIcon
      icon={iconMap[theme]}
      label={t('theme.toggle')}
      onClick={handleThemeClick}
    />
  );
};
