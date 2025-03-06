import React, { type FC } from 'react';

import { LoaderCircleIcon } from 'lucide-react';

import styles from './Loader.module.scss';

export const Loader: FC = () => (
  <LoaderCircleIcon className={styles.loader} size={14} />
);
