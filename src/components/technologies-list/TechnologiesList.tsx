import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';

import styles from './TechnologiesList.module.scss';

export const TechnologiesList: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.list}>
      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.main')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.react.title')}</Text>
          <Text type="secondary">{t('technologies.react.description')}</Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.nextJs.title')}</Text>
          <Text type="secondary">
            {t('technologies.nextI18next.description')}
          </Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.typeScript.title')}</Text>
          <Text type="secondary">
            {t('technologies.typeScript.description')}
          </Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.stateManagement')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.reduxToolkit.title')}</Text>
          <Text type="secondary">
            {t('technologies.reduxToolkit.description')}
          </Text>
        </div>

        <div className={styles.technology}>
          <Text strong>{t('technologies.reduxPersist.title')}</Text>
          <Text type="secondary">
            {t('technologies.reduxPersist.description')}
          </Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.apiRequests')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.rtkQuery.title')}</Text>
          <Text type="secondary">{t('technologies.rtkQuery.description')}</Text>
        </div>

        <div className={styles.technology}>
          <Text strong>{t('technologies.axios.title')}</Text>
          <Text type="secondary">{t('technologies.axios.description')}</Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.stylingUi')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.scss.title')}</Text>
          <Text type="secondary">{t('technologies.scss.description')}</Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.antDesign.title')}</Text>
          <Text type="secondary">
            {t('technologies.antDesign.description')}
          </Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.lucideReact.title')}</Text>
          <Text type="secondary">
            {t('technologies.lucideReact.description')}
          </Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.localization')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.i18next.title')}</Text>
          <Text type="secondary">{t('technologies.i18next.description')}</Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.nextI18next.title')}</Text>
          <Text type="secondary">
            {t('technologies.nextI18next.description')}
          </Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.lintingQuality')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.eslintPrettier.title')}</Text>
          <Text type="secondary">
            {t('technologies.eslintPrettier.description')}
          </Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.stylelint.title')}</Text>
          <Text type="secondary">
            {t('technologies.stylelint.description')}
          </Text>
        </div>
      </div>

      <div className={styles.block}>
        <Title className={styles.title} level={4}>
          {t('technologies.utilities')}
        </Title>

        <div className={styles.technology}>
          <Text strong>{t('technologies.clsx.title')}</Text>
          <Text type="secondary">{t('technologies.clsx.description')}</Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.dayjs.title')}</Text>
          <Text type="secondary">{t('technologies.dayjs.description')}</Text>
        </div>
        <div className={styles.technology}>
          <Text strong>{t('technologies.uuid.title')}</Text>
          <Text type="secondary">{t('technologies.uuid.description')}</Text>
        </div>
      </div>
    </div>
  );
};
