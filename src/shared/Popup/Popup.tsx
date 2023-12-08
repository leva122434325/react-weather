import React from 'react';
import s from './Popup.module.scss';
import { Item } from '../../home/components/thisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../home/components/thisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

type Props = {};

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            <span>Время:21:54</span>
          </div>
          <div className={s.day__city}>
            <span>Город: Санкт-петербург</span>
          </div>
        </div>
        <div className={s.this__day_info}>
          <div className={s.this__day_items}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
