import React from "react";
import { View } from "react-native";

import { COLORS } from "~/constants";
import Battery0Icon from "~/assets/svg/battery-0-icon.svg";
import Battery25Icon from "~/assets/svg/battery-25-icon.svg";
import Battery50Icon from "~/assets/svg/battery-50-icon.svg";
import Battery75Icon from "~/assets/svg/battery-75-icon.svg";
import Battery100Icon from "~/assets/svg/battery-100-icon.svg";

interface BatteryProps {
  value: number;
  color: string;
}

const Battery = ({ value, color }: BatteryProps) => {
  const level = React.useMemo(() => {
    if (value < 12.5) {
      return "empty";
    } else if (value < 37.5) {
      return "low";
    } else if (value < 62.5) {
      return "medium";
    } else if (value < 87.5) {
      return "high";
    }

    return "full";
  }, [value]);

  const iconColor = value > 20 ? color : COLORS.error;

  return (
    <View>
      {level === "empty" && (
        <Battery0Icon width={36} height={32} fill={iconColor} />
      )}
      {level === "low" && (
        <Battery25Icon width={36} height={32} fill={iconColor} />
      )}
      {level === "medium" && (
        <Battery50Icon width={36} height={32} fill={iconColor} />
      )}
      {level === "high" && (
        <Battery75Icon width={36} height={32} fill={iconColor} />
      )}
      {level === "full" && (
        <Battery100Icon width={36} height={32} fill={iconColor} />
      )}
    </View>
  );
};

export default Battery;
