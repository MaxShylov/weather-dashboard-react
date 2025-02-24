import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'antd/es/typography/Title';

type PageName = 'history' | 'main' | 'technologies';

interface PageTitleProps {
  pageName: PageName;
}

export const PageTitle: FC<PageTitleProps> = ({ pageName }) => {
  const { t } = useTranslation();

  const titles = {
    history: t('pageTitles.history'),
    main: t('pageTitles.main'),
    technologies: t('pageTitles.technologies'),
  };

  return <Title className="text-center">{titles[pageName]}</Title>;
};
