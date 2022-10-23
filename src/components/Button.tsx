import * as React from "react";
import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";

import { COLORS, SIZES } from "~/constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: COLORS.gray,
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 4 * SIZES.base,
    paddingVertical: 2 * SIZES.base
  }
});

interface ButtonProps {
  label?: string;
  onPress: () => void;
  isIcon?: boolean;
  icon?: any;
}

const Button = ({ label, onPress, isIcon = false, icon }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.container,
        opacity: pressed ? 0.67 : 1
      })}
    >
      {isIcon ? icon : <Text>{label}</Text>}
    </Pressable>
  );
};

export default Button;
