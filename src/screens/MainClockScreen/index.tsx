import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useKeepAwake } from "expo-keep-awake";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { DateDisplay, TimeDisplay } from "./components/Displays";
import dayjs from "../../utils/extendDay";
import {
  useShowBattery,
  useShowDate,
  useShowSeconds,
  useTimeColor,
  useTimeFont,
  useTimeFormat
} from "../../hooks";
import { useBatteryLevel } from "../../utils/battery";

import { COLORS, SIZES } from "~/constants";
import Battery from "~/components/Battery";
import Button from "~/components/Button";
import ModalMenu from "~/components/ModalMenu";
import { RouteKeys } from "~/navigation/RouteKeys";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.black,
    flex: 1
  },
  display: {
    alignItems: "center",
    marginBottom: SIZES.base * 2,
    paddingHorizontal: SIZES.base * 4
  }
});

export const MainClockScreen = ({ navigation }: any) => {
  useKeepAwake();
  const [time, setTime] = React.useState(dayjs());
  const [showModal, setShowModal] = React.useState(false);
  const level = useBatteryLevel();

  const { timeColor } = useTimeColor();
  const { timeFont } = useTimeFont();
  const { timeFormat } = useTimeFormat();
  const { showTimeSeconds } = useShowSeconds();
  const { showTimerDate } = useShowDate();
  const { showBatteryLevel } = useShowBattery();

  React.useEffect(() => {
    const updateTime = () => setTime(dayjs());
    const i = setInterval(() => updateTime(), 333);
    updateTime();
    return () => clearInterval(i);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <TimeDisplay
          value={time}
          color={timeColor}
          format={timeFormat}
          showSeconds={showTimeSeconds}
          font={timeFont}
          style={{ marginBottom: 8 }}
        />

        {showTimerDate && (
          <DateDisplay
            value={time}
            color={timeColor}
            style={{ marginBottom: 20 }}
          />
        )}

        {/* TODO: Change this render */}
        {showBatteryLevel && <Battery value={100 * level} color={timeColor} />}
      </View>

      <Button
        isIcon
        icon={<Icon name={"settings"} size={30} color={timeColor} />}
        onPress={() => setShowModal(true)}
      />

      <ModalMenu isVisible={showModal} onClose={() => setShowModal(false)}>
        <Button
          label={"StopWatch"}
          onPress={() => navigation.navigate(RouteKeys.StopWatch)}
        />
        <View style={{ height: SIZES.base * 2.5 }} />
        <Button
          label={"Settings"}
          onPress={() => navigation.navigate(RouteKeys.Settings)}
        />
      </ModalMenu>
      <StatusBar hidden />
    </SafeAreaView>
  );
};
