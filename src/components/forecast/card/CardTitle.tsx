import React, { type FC } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';

import Title from 'antd/es/typography/Title';

import styles from './Card.module.scss';

interface CardTitleProps {
  dateUnix: number;
  variant: 'desktop' | 'mobile';
}

export const CardTitle: FC<CardTitleProps> = ({ dateUnix, variant }) => (
  <Title className={clsx(styles.cardTitle, styles[variant])} level={4}>
    {dayjs.unix(dateUnix).format('LT')}
  </Title>
);
