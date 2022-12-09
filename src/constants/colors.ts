export const COLORS = {
  black: "#000000",
  black50: "rgba(0, 0, 0, 0.5)",

  white: "#FFFFFF",

  gray: "#A0A1B4",
  lightGray: "#F7F7F7",

  itemActive: "#FFFFFF",
  itemInactive: "#8DC3B1",

  primary: "#30778C",
  primaryDark: "#225362",

  secondary: "#A1DAF5",
  secondaryDark: "#79B2CD",

  background: "#EAF1F4",
  backgroundDark: "#191919",

  borderColor: "#D6E4E8",
  borderColorDark: "#133038",

  text: "#191919",
  textDark: "#EEEEEE",

  success: "#FDD446",

  error: "#F6565E"
};

const palette = {
  white: "#FFFFFF",
  black: "#091A28",
  red: "red",
  red300: "#FCA5A5",
  slate300: "#CBC4D1",
  beige300: "#F1E7D0",
  blue90: "#233254",
  green200: "#00835C",
  green500: "#20C997",
  green800: "#004732"
};

export interface ITheme {
  name: string;
  colors: {
    stop: string;
    reset: string;
    $foreground: string;
    $background: string;
    $alternate: string;
    $primary: string;
    $base: string;
  };
}

const lightTheme: ITheme = {
  name: "light",
  colors: {
    stop: palette.red,
    reset: palette.red300,
    $foreground: palette.slate300,
    $background: palette.white,
    $alternate: palette.green200,
    $primary: palette.blue90,
    $base: palette.black
  }
};

const darkTheme: ITheme = {
  name: "dark",
  colors: {
    ...lightTheme.colors,
    $background: palette.black,
    $alternate: palette.green500,
    $base: palette.white,
    $primary: palette.white
  }
};

const coffeeTheme: ITheme = {
  name: "coffee",
  colors: {
    ...lightTheme.colors,
    $background: palette.beige300,
    $alternate: palette.green800
  }
};

export const themes = [lightTheme, darkTheme, coffeeTheme];
