import React from 'react';
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../assets/icons/GlobalSvgSelector';

type Props = {};

export const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sunshine" />
      </div>
      <div className={s.bootom__block}>
        <div className={s.this__time}>
          <span>Время:21:54</span>
        </div>
        <div className={s.this__city}>
          <span>Город: Санкт-петербург</span>
        </div>
      </div>
    </div>
  );
};
