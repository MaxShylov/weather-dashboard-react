import React, { type FC } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import SkeletonInput from 'antd/es/skeleton/Input';
import SkeletonNode from 'antd/es/skeleton/Node';

import mainStyles from '../WeatherView.module.scss';
import styles from './Skeleton.module.scss';

export const Skeleton: FC = () => (
  <div className={mainStyles.weatherCurrent}>
    <SkeletonInput rootClassName={clsx(mainStyles.date, styles.date)} active />

    <div className={mainStyles.cards}>
      {Array.from({ length: 6 }).map(() => (
        <SkeletonNode key={uuidv4()} rootClassName={styles.card} active />
      ))}
    </div>
  </div>
);
