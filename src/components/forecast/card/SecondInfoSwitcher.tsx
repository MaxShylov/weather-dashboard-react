import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import Button from 'antd/es/button';

import { ArrowDownIcon } from 'lucide-react';

import styles from './Card.module.scss';

interface SecondInfoSwitcherProps {
  active?: boolean;
  onClick?: VoidFunction;
}

export const SecondInfoSwitcher = memo<SecondInfoSwitcherProps>(
  ({ active, onClick: handleClick }) => {
    const { t } = useTranslation();

    const iconClasses = clsx(styles.arrow, { [styles.up]: active });

    return (
      <Button
        aria-label={t('forecast.toggleSecondInfo')}
        className={styles.secondInfoSwitcher}
        icon={<ArrowDownIcon className={iconClasses} size={20} />}
        onClick={handleClick}
      />
    );
  }
);
