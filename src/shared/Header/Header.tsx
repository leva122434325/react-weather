import React from 'react';
import Select from 'react-select';
import s from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Ростов-на-Дону' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Санкт-Петербург' },
  ];
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4793ff' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React-weather</div>
      </div>
      <div className={s.wrapper}>
        <div onClick={changeTheme} className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultInputValue="Выбрать город" styles={colorStyles} options={options} />
      </div>
    </header>
  );
};
