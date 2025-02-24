import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import Button from 'antd/es/button';

import { ArrowDown } from 'lucide-react';

import styles from './Card.module.scss';

interface SecondInfoSwitcherProps {
  active?: boolean;
  onClick?: VoidFunction;
}

export const SecondInfoSwitcher = memo<SecondInfoSwitcherProps>(
  ({ active, onClick: handleClick }) => {
    const { t } = useTranslation();

    return (
      <Button
        icon={
          <ArrowDown
            className={clsx(styles.arrow, { [styles.up]: active })}
            size={20}
          />
        }
        aria-label={t('forecast.toggleSecondInfo')}
        className={styles.secondInfoSwitcher}
        onClick={handleClick}
      />
    );
  }
);
