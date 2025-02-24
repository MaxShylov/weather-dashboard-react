import React, { type FC } from 'react';
import clsx from 'clsx';

import AntCard from 'antd/es/card';

import {
  ArrowDown,
  Binoculars,
  CloudRain,
  Cloudy,
  Droplet,
  Snowflake,
  WindArrowDown,
  WindIcon,
} from 'lucide-react';

import { ConditionImage } from '@/components/condition-image';
import { upperFirst } from '@/helpers';
import { useToggle } from '@/hooks/useToggle';
import { useUnitsLabel } from '@/hooks/useUnitsLabel';
import { useVisibilityData } from '@/hooks/useVisibilityData';
import { type DayForecast } from '@/types';

import { CardTitle } from './CardTitle';
import { SecondInfoSwitcher } from './SecondInfoSwitcher';
import { TemperatureIcon } from './TemperatureIcon';

import styles from './Card.module.scss';

interface CardProps {
  data: DayForecast;
}

export const Card: FC<CardProps> = ({
  data: {
    clouds,
    conditionDescription,
    conditionIcon,
    dateUnix,
    humidity,
    pressure,
    rain,
    snow,
    temp,
    tempFeelsLike,
    visibility,
    windDeg,
    windSpeed,
  },
}) => {
  const { celsius, hPa, metersPerSec, mm } = useUnitsLabel();
  const [showSecondInfo, toggleSecondInfo] = useToggle(false);

  const visibilityData = useVisibilityData(visibility);

  return (
    <AntCard className={styles.card} size="small">
      <div className={styles.cardBody}>
        <CardTitle dateUnix={dateUnix} variant="desktop" />

        <div>
          <div className={styles.mainInfo}>
            <div className={styles.cardHeader}>
              <CardTitle dateUnix={dateUnix} variant="mobile" />

              <div className={styles.value}>
                <ConditionImage
                  description={conditionDescription}
                  icon={conditionIcon}
                />
                <div className={styles.conditionDescription}>
                  {upperFirst(conditionDescription)}
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <div className={clsx(styles.value, styles.temp)}>
                <TemperatureIcon temp={temp} />
                {temp} {celsius} ( {tempFeelsLike} {celsius} )
              </div>

              <div className={clsx(styles.value, styles.wind)}>
                <WindIcon /> {windSpeed} {metersPerSec}
                {!!windSpeed && (
                  <ArrowDown
                    className={styles.windArrow}
                    size={18}
                    style={{ rotate: `${windDeg}deg` }}
                  />
                )}
              </div>
            </div>
          </div>

          <SecondInfoSwitcher
            active={showSecondInfo}
            onClick={toggleSecondInfo}
          />

          <div
            className={clsx(styles.secondInfoWrapper, {
              [styles.show]: showSecondInfo,
            })}
          >
            <div className={styles.secondInfo}>
              <div className={styles.value}>
                <WindArrowDown /> {pressure} {hPa}
              </div>

              <div className={styles.value}>
                <CloudRain /> {rain} {mm}
              </div>

              <div className={styles.value}>
                <Snowflake /> {snow} {mm}
              </div>

              <div className={styles.value}>
                <Droplet /> {humidity} %
              </div>

              <div className={styles.value}>
                <Cloudy /> {clouds} %
              </div>

              <div className={styles.value}>
                <Binoculars /> {visibilityData.value} {visibilityData.unit}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AntCard>
  );
};
