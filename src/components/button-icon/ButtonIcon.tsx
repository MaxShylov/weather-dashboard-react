import React, { type FC } from 'react';
import clsx from 'clsx';

import Button from 'antd/es/button';
import { type ButtonProps } from 'antd/es/button/button';

import styles from './ButtonIcon.module.scss';

type ButtonIconProps = ButtonProps & {
  label: string;
};

export const ButtonIcon: FC<ButtonIconProps> = ({
  className,
  label,
  size = 'large',
  ...rest
}) => (
  <Button
    aria-label={label}
    className={clsx(styles.button, className)}
    size={size}
    {...rest}
  />
);
