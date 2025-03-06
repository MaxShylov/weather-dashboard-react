import React, { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Footer as AntFooter } from 'antd/es/layout/layout';
import Text from 'antd/es/typography/Text';

import gitHubSrc from '@/assets/icons/git-hub.svg';
import gitHubWhiteSrc from '@/assets/icons/git-hub-white.svg';
import linkedInSrc from '@/assets/icons/linked-in.svg';
import { useTheme } from '@/hooks/store';

import { Container } from '../container';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const gitHubIconSrc = theme === 'light' ? gitHubSrc : gitHubWhiteSrc;

  return (
    <AntFooter className={styles.footer}>
      <Container className={styles.footerContent}>
        <Text>{t('footer.createdBy')}</Text>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/max-shylov"
          target="_blank"
        >
          <Image alt="LinkedIn" src={linkedInSrc} width={18} />
        </Link>
        <Link
          className={styles.link}
          href="https://github.com/MaxShylov"
          target="_blank"
        >
          <Image alt="GitHub" src={gitHubIconSrc} width={18} />
        </Link>
      </Container>
    </AntFooter>
  );
};
