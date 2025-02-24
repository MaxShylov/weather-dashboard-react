import React from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Forecast } from '@/components/forecast';
import { Page } from '@/components/page';
import { PageTitle } from '@/components/PageTitle';
import { SearchCity } from '@/components/search-city';
import { SelectedCity } from '@/components/SelectedCity';
import { Weather } from '@/components/weather';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'default', ['common'])),
  },
});

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Weather</title>
      <meta content="Weather" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Page>
      <PageTitle pageName="main" />

      <SearchCity />
      <SelectedCity />
      <Weather />
      <Forecast />
    </Page>
  </>
);

export default Home;
