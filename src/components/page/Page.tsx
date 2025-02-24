import React, { type FC, type PropsWithChildren } from 'react';

import Layout, { Content } from 'antd/es/layout/layout';

import { Container } from './container';
import { Footer } from './footer';
import { Header } from './header';

import styles from './Page.module.scss';

export const Page: FC<PropsWithChildren> = ({ children }) => (
  <Layout className={styles.page}>
    <Header />

    <Content>
      <Container className={styles.contentContainer}>{children}</Container>
    </Content>

    <Footer />
  </Layout>
);
