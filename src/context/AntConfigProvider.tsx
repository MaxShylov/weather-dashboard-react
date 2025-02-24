import React, { type FC, type PropsWithChildren, useMemo } from 'react';
import { useTranslation } from 'next-i18next';

import ConfigProvider from 'antd/es/config-provider';
import antdTheme from 'antd/es/theme';
import enUS from 'antd/locale/en_US';
import ukUA from 'antd/locale/uk_UA';

import { useTheme } from '@/hooks/store';

const localeMap = {
  en: enUS,
  uk: ukUA,
};

const themeMap = {
  dark: antdTheme.darkAlgorithm,
  light: antdTheme.defaultAlgorithm,
};

export const AntConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const { i18n } = useTranslation();

  const configLocale = localeMap[i18n.language as 'en' | 'uk'] || enUS;
  const configTheme = useMemo(
    () => ({
      algorithm: themeMap[theme],
      components: {
        Typography: {
          titleMarginBottom: 0,
          titleMarginTop: 0,
        },
      },
    }),
    [theme]
  );

  return (
    <ConfigProvider locale={configLocale} theme={configTheme}>
      {children}
    </ConfigProvider>
  );
};
