import React from "react";
import type { StyleProp, TextStyle } from "react-native";
import { Text as ReText, StyleSheet } from "react-native";

import { normalize } from "../utils/normalize";

import { COLORS, SIZES } from "~/constants";

interface TextProps {
  fontSize?: number;
  style?: StyleProp<TextStyle>;
  children: React.ReactElement;
}

const Text = ({ fontSize = SIZES.font, style = {}, children }: TextProps) => {
  return (
    <ReText
      numberOfLines={1}
      adjustsFontSizeToFit
      style={{ ...styles.text, ...style, fontSize: normalize(fontSize) }}
    >
      {children}
    </ReText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.gray
  }
});

export default Text;
