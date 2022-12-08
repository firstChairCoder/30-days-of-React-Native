import type { ReactNode } from "react";
import React, { createContext, useState } from "react";

type ThemeType = "light" | "dark" | "coffee";
const themes: ThemeType[] = ["light", "dark", "coffee"];

// export const CustomThemeContext = createContext<
//   { theme: ThemeType; changeTheme: (val: ThemeType) => void } | undefined
// >(undefined);
const CustomThemeContext = createContext(); //TODO: Properly type this

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const changeTheme = (val: ThemeType) => {
    setTheme(val);
  };

  const value = { theme, changeTheme };
  return (
    <CustomThemeContext.Provider value={value}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { CustomThemeContext, CustomThemeProvider };
