import React, { type FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Footer as AntFooter } from 'antd/es/layout/layout';
import Text from 'antd/es/typography/Text';

import GithubOutlined from '@ant-design/icons/GithubOutlined';
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined';

import { Container } from '../container';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <AntFooter className={styles.footer}>
      <Container className={styles.footerContent}>
        <Text>{t('footer.createdBy')}</Text>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/max-shylov"
          target="_blank"
        >
          <LinkedinOutlined />
        </Link>
        <Link
          className={styles.link}
          href="https://github.com/MaxShylov"
          target="_blank"
        >
          <GithubOutlined />
        </Link>
      </Container>
    </AntFooter>
  );
};
