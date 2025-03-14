import React, { type FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { Header as AntHeader } from 'antd/es/layout/layout';

import { CloudSunRainIcon } from 'lucide-react';

import { LanguageSwitcher } from '@/components/language-switcher';
import { Navigation } from '@/components/navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { selectTheme } from '@/features/themeSlice';
import { useAppSelector } from '@/hooks/store';

import { Container } from '../container';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const theme = useAppSelector(selectTheme);

  const isLightTheme = theme === 'light';

  return (
    <AntHeader
      className={clsx(styles.header, { [styles.light]: isLightTheme })}
    >
      <Container className={styles.headerContainer}>
        <Link className={styles.logo} href="/">
          <CloudSunRainIcon size={40} />
        </Link>

        <div className={styles.controls}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <Navigation />
      </Container>
    </AntHeader>
  );
};
