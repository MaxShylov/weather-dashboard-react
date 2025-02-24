import React, { type FC } from 'react';
import Image from 'next/image';

import styles from './ConditionImage.module.scss';

interface ConditionImageProps {
  description: string;
  icon: string;
}

export const ConditionImage: FC<ConditionImageProps> = ({
  description,
  icon,
}) => (
  <div className={styles.conditionImage}>
    <Image
      alt={description}
      height={50}
      objectPosition="center"
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      width={50}
    />
  </div>
);
