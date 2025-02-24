import React from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Page } from '@/components/page';
import { PageTitle } from '@/components/PageTitle';
import { TechnologiesList } from '@/components/technologies-list';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

const Technologies = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => (
  <>
    <Head>
      <title>Technologies</title>
      <meta content="Technologies" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Page>
      <PageTitle pageName="technologies" />

      <TechnologiesList />
    </Page>
  </>
);

export default Technologies;
