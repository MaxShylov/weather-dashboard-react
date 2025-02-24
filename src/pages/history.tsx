import React from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CitySearchHistory } from '@/components/city-search-history';
import { Page } from '@/components/page';
import { PageTitle } from '@/components/PageTitle';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const History = (_props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>History</title>
      <meta content="History" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Page>
      <PageTitle pageName="history" />

      <CitySearchHistory />
    </Page>
  </>
);

export default History;
