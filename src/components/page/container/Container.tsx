import React, { type FC, type PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => <div className={clsx(styles.container, className)}>{children}</div>;
