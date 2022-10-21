import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height
};

export const FONTS = {
  largeTitle: { fontFamily: "AlegreyaBlack", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "AlegreyaBold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "AlegreyaBold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "AlegreyaBoldItalic", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "AlegreyaBoldItalic", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Alegreya-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontFamily: "Lato", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Alegreya", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "LatoItalic", fontSize: SIZES.body3, lineHeight: 22 },
  body4: {
    fontFamily: "AlegreyaItalic",
    fontSize: SIZES.body4,
    lineHeight: 22
  },
  body5: { fontFamily: "LatoLight", fontSize: SIZES.body5, lineHeight: 22 },
  body6: { fontFamily: "LatoThin", fontSize: SIZES.body5, lineHeight: 22 }
};

const appTheme = { SIZES, FONTS };

export default appTheme;
