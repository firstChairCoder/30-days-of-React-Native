/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ReactNode } from "react";
import React, { createContext, useState } from "react";

import type { ITheme } from "../constants";
import { themes } from "../constants";

type ThemeNameType = "light" | "dark" | "coffee";
const CustomThemeContext = createContext<{
  theme: ITheme;
  changeTheme: (val: ThemeNameType) => void;
}>(null as any); //TODO: Still Properly type this

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  //@ts-ignore
  const [theme, setTheme] = useState<ITheme>(themes[0]);

  const changeTheme = (val: ThemeNameType) => {
    val === "light"
      ? setTheme(themes[0])
      : val === "dark"
      ? setTheme(themes[1])
      : setTheme(themes[2]);
  };

  const value = { theme, changeTheme };
  return (
    <CustomThemeContext.Provider value={value}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeContext, CustomThemeProvider };
