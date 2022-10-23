import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import Text from "./Text";

import { COLORS, SIZES } from "~/constants";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: SIZES.base,
    padding: SIZES.base
  },
  label: {
    marginLeft: SIZES.base * 2
  }
});

const RadioContext = React.createContext({
  value: "",
  onChange: (_value = "") => {
    // unimplemented
  }
});

interface RadioFieldProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const RadioField = ({ value, onChange, children }: RadioFieldProps) => {
  const contextValue = React.useMemo(
    () => ({ value, onChange }),
    [value, onChange]
  );

  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </RadioContext.Provider>
  );
};

interface RadioButtonProps {
  label: string;
  value: string;
}

export const RadioButton = ({ label, value }: RadioButtonProps) => {
  const { value: contextValue, onChange } = React.useContext(RadioContext);

  return (
    <Pressable onPress={() => onChange(value)} style={styles.button}>
      {value === contextValue ? (
        <Icon name={"radio-button-on"} size={30} color={COLORS.gray} />
      ) : (
        <Icon name={"radio-button-off"} size={30} color={COLORS.gray} />
      )}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

interface CheckboxButtonProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const CheckboxButton = ({
  label,
  value,
  onChange
}: CheckboxButtonProps) => {
  return (
    <Pressable onPress={() => onChange((value = !value))} style={styles.button}>
      {value ? (
        <Icon name={"check-box"} size={30} colors={COLORS.gray} />
      ) : (
        <Icon name={"check-box-outline-blank"} size={30} colors={COLORS.gray} />
      )}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
