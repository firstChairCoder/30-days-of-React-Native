import * as React from "react";
import { Pressable, StyleSheet } from "react-native";

import dayjs from "../utils/extendDay";

import { TimeDisplay } from "~/screens/MainClockScreen/components/Displays";
import { SIZES } from "~/constants";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    height: 120,
    marginBottom: SIZES.base * 2,
    padding: SIZES.base
  }
});
const TimeContext = React.createContext({
  value: "",
  onChange: (_value = "") => {
    // unimplemented
  }
});

interface TimeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const TimeSelector = ({
  value,
  onChange,
  children
}: TimeSelectorProps) => {
  const contextValue = React.useMemo(
    () => ({ value, onChange }),
    [value, onChange]
  );

  return (
    <TimeContext.Provider value={contextValue}>{children}</TimeContext.Provider>
  );
};

interface TimeButtonProps {
  value: string;
  color: string;
  font: string;
  format: "am_pm" | "24h";
  showSeconds?: boolean;
}

export const TimeButton = ({
  value,
  color,
  font,
  format,
  showSeconds
}: TimeButtonProps) => {
  const { value: contextValue, onChange } = React.useContext(TimeContext);
  const now = React.useMemo(() => dayjs(), []);

  return (
    <Pressable
      onPress={() => onChange(value)}
      style={({ pressed }) => ({
        ...styles.button,
        borderColor: color,
        opacity:
          // eslint-disable-next-line no-nested-ternary
          value === contextValue ? (pressed ? 0.9 : 1) : pressed ? 0.4 : 0.3
      })}
    >
      <TimeDisplay
        value={now}
        color={color}
        font={font}
        format={format}
        showSeconds={showSeconds}
      />
    </Pressable>
  );
};
