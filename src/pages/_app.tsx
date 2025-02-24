import React from 'react';
import { type AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import dayjs from 'dayjs';
import pluginCalendar from 'dayjs/plugin/calendar';
import pluginLocalizedFormat from 'dayjs/plugin/localizedFormat';

import { AntConfigProvider } from '@/context/AntConfigProvider';
import { ReduxProvider } from '@/context/ReduxProvider';

import 'dayjs/locale/uk';
import 'antd/es/style/reset.css';

import '@/styles/global.scss';

dayjs.extend(pluginLocalizedFormat);
dayjs.extend(pluginCalendar);

const App = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider>
    <AntConfigProvider>
      <Component {...pageProps} />
    </AntConfigProvider>
  </ReduxProvider>
);

export default appWithTranslation(App);
