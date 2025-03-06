import React, { type FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';

import Menu from 'antd/es/menu';

import { MenuIcon } from 'lucide-react';

import { ButtonIcon } from '@/components/button-icon';
import { useTheme } from '@/hooks/store';

import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const theme = useTheme();

  const items = [
    {
      key: '/',
      label: <Link href="/">{t('nav.main')}</Link>,
    },
    {
      key: '/history',
      label: <Link href="/history">{t('nav.history')}</Link>,
    },
    {
      key: '/technologies',
      label: <Link href="/technologies">{t('nav.technologies')}</Link>,
    },
  ];

  return (
    <Menu
      overflowedIndicator={
        <ButtonIcon icon={<MenuIcon />} label={t('menu.label')} />
      }
      className={styles.menu}
      items={items}
      mode="horizontal"
      selectedKeys={[pathname]}
      theme={theme}
      triggerSubMenuAction="click"
    />
  );
};
