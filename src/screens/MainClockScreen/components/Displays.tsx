import * as React from "react";
import type { StyleProp, TextStyle } from "react-native";

import CustomText from "../../../components/Text";

import { AM_PM } from "~/constants";

interface DisplayProps {
  format?: string;
  showSeconds?: boolean;
  value: any;
  color: string;
  font?: string;
  style?: StyleProp<TextStyle>;
}

export const DateDisplay = ({ value, color, style = {} }: DisplayProps) => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setText(value.format("ll"));
  }, [value]);

  return (
    <CustomText fontSize={20} style={{ ...style, color }}>
      {text}
    </CustomText>
  );
};

export const TimeDisplay = ({
  value,
  color,
  format,
  showSeconds = false,
  font = "Lato",
  style = {}
}: DisplayProps) => {
  const [text, setText] = React.useState<string>("");
  //   const orientation = useOrientation();
  //   const textWidth = React.useMemo(() => {
  //     return orientation == "portrait" ? 65 : 75;
  //   }, [orientation]);

  const timeFormat = React.useMemo(() => {
    if (format === AM_PM) {
      return showSeconds ? "h:mm:ss a" : "h:mm a";
    }

    return showSeconds ? "HH:mm:ss" : "HH:mm";
  }, [format, showSeconds]);

  React.useEffect(() => {
    setText(value.format(timeFormat));
  }, [value, timeFormat]);

  return (
    <CustomText fontSize={65} style={{ ...style, color, fontFamily: font }}>
      {text}
    </CustomText>
  );
};
