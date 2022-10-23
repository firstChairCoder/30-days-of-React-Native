import React from "react";
import { ScrollView } from "react-native";

import FormLayout from "./components/FormLayout";
import {
  useShowBattery,
  useShowDate,
  useShowSeconds,
  useTimeColor,
  useTimeFont,
  useTimeFormat
} from "../../hooks";

import {
  CheckboxButton,
  RadioButton,
  RadioField
} from "~/components/RadioField";
import { AM_PM, COLORS, H24 } from "~/constants";
import { TimeButton, TimeSelector } from "~/components/TimeField";
import { APP_COLORS, APP_FONTS } from "~/constants/theme";

export const SettingsScreen = () => {
  const { timeFormat, setTimeFormat } = useTimeFormat();
  const { showTimeSeconds, setShowTimeSeconds } = useShowSeconds();
  const { showTimerDate, setShowTimerDate } = useShowDate();
  const { showBatteryLevel, setShowBatteryLevel } = useShowBattery();
  const { timeFont, setTimeFont } = useTimeFont();
  const { timeColor, setTimeColor } = useTimeColor();

  //rewrite with dispatch and selector hooks
  // const doSave = () => {
  //   saveConfig({
  //     timeFormat,
  //     showSeconds,
  //     showDate,
  //     showBattery
  //   });
  //   navigate("/");
  // };
  return (
    // Settings part
    <ScrollView style={{ flex: 1 }}>
      <FormLayout onSave={() => true}>
        <RadioField value={timeFormat} onChange={setTimeFormat}>
          <RadioButton value={H24} label={"use 24h format"} />
          <RadioButton value={AM_PM} label={"use am|pm format"} />
        </RadioField>
        <CheckboxButton
          label={"show seconds"}
          value={showTimeSeconds}
          onChange={setShowTimeSeconds}
        />
        <CheckboxButton
          label={"show date"}
          value={showTimerDate}
          onChange={setShowTimerDate}
        />
        <CheckboxButton
          label={"show battery"}
          value={showBatteryLevel}
          onChange={setShowBatteryLevel}
        />
      </FormLayout>

      {/* Fonts part */}
      <FormLayout onSave={() => true}>
        <TimeSelector value={timeFont} onChange={setTimeFont}>
          {APP_FONTS.map((font) => (
            <TimeButton
              key={font}
              value={font}
              color={COLORS.gray}
              font={font}
              format={timeFormat}
              showSeconds={showTimeSeconds}
            />
          ))}
        </TimeSelector>
      </FormLayout>

      {/* Colors part */}
      <FormLayout onSave={() => true}>
        <TimeSelector value={timeColor} onChange={setTimeColor}>
          {APP_COLORS.map((color) => (
            <TimeButton
              key={color}
              value={color}
              color={color}
              font={timeFont}
              format={timeFormat}
              showSeconds={showTimeSeconds}
            />
          ))}
        </TimeSelector>
      </FormLayout>
    </ScrollView>
  );
};
