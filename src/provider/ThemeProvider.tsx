import { ReactNode, useState } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { storage } from '../model/Storage';
import { changeCssRootVariable } from '../model/ChangeCssRootVariable';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

  changeCssRootVariable(theme);
  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariable(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
