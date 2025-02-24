import React, { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

import Title from 'antd/es/typography/Title';

import { upperFirst } from '@/helpers';

interface DayLabelProps {
  className?: string;
  date: string;
}

export const DayLabel: FC<DayLabelProps> = ({ className, date }) => {
  const { t } = useTranslation();

  const dayjsDate = dayjs(date);
  const isToday = dayjs().isSame(dayjsDate, 'day');
  const dayLabel = upperFirst(dayjsDate.format('dddd'));

  return (
    <Title className={className} level={3}>
      {isToday ? t('forecast.today') : dayLabel}
    </Title>
  );
};
