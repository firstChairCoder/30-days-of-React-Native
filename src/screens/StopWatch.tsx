// Inspo: https://dribbble.com/shots/8200836-Skeuomorph-Clock-App

import { MaterialIcons as Icon } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStopWatch from "~/hooks/useStopWatch";
import {
  CustomThemeContext,
  CustomThemeProvider
} from "~/store/CustomThemeProvider";
import formatTimeAsString from "~/utils/formatTime";

const { width, height } = Dimensions.get("window");
const TIMER_SIZE = width * 0.7;
// console.log(TIMER_SIZE);
const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", flex: 1, paddingHorizontal: 16 },
  header: {
    color: "#233554",
    fontFamily: "AlegreyaBlack",
    fontSize: 28
  },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconCircle: {
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 2,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  timer: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: TIMER_SIZE / 2,
    borderWidth: 1,
    height: TIMER_SIZE,
    justifyContent: "center",
    marginTop: height * 0.1,
    width: TIMER_SIZE
  },
  dot: {
    alignSelf: "center",
    fontFamily: "AlegreyaBold",
    fontSize: 26
  },
  number: {
    fontFamily: "Lato",
    fontSize: 30,
    width: 36
  },
  btn: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1.5,
    height: 60,
    justifyContent: "center",
    maxWidth: width * 0.45,
    width: 150
  }
});

// interface ComponentNameProps {}

const StopWatch = () => {
  //   const { theme, changeTheme } = useContext(CustomThemeContext);
  return (
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  );
};

export default StopWatch;

function App() {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(CustomThemeContext);

  const { seconds, minutes, hours, controls, isStarted } = useStopWatch();

  // function handleChange() {
  //   changeTheme("coffee");
  // }
  const handleStart = () => {
    controls.start();
    console.log(isStarted);
  };
  const handleReset = () => {
    controls.reset();
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top * 1.5,
          backgroundColor: theme.colors.$background
        }
      ]}
    >
      <View style={styles.headerWrapper}>
        <Text style={[styles.header, { color: theme.colors.$primary }]}>
          Clock
        </Text>
        <View
          style={[
            styles.iconCircle,
            {
              borderColor: theme.colors.$alternate
            }
          ]}
        >
          <Icon name={"settings"} color={theme.colors.$base} size={24} />
        </View>
      </View>

      <View
        style={[
          styles.timer,
          {
            borderColor: theme.colors.$alternate,
            flexDirection: "row"
          }
        ]}
      >
        <Text style={[styles.number, { color: theme.colors.$primary }]}>
          {formatTimeAsString(hours)}
        </Text>
        <Text style={[styles.dot, { color: theme.colors.$foreground }]}>:</Text>
        <Text style={[styles.number, { color: theme.colors.$primary }]}>
          {formatTimeAsString(minutes)}
        </Text>
        <>
          <Text style={[styles.dot, { color: theme.colors.$foreground }]}>
            :
          </Text>
          <Text style={[styles.number, { color: theme.colors.$primary }]}>
            {formatTimeAsString(seconds)}
          </Text>
        </>
      </View>

      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <Button label={"Start"} onPress={handleStart} />
        <Button label={"Reset"} onPress={handleReset} />
      </View>

      <FlatList
        style={{ marginTop: 16 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={[
          { id: "1", item: "00.03.12" },
          { id: "2", item: "00.23.09" },
          { id: "3", item: "00.45.12" },
          { id: "4", item: "00.45.12" },
          { id: "5", item: "00.45.12" },
          { id: "6", item: "00.45.12" },
          { id: "7", item: "00.45.12" },
          { id: "8", item: "00.45.12" },
          { id: "9", item: "00.45.12" }
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                width: "100%",
                borderWidth: 1.5,
                marginVertical: 8,
                paddingHorizontal: 16,
                height: 60,
                borderRadius: 16,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "LatoBold",
                  fontSize: 24,
                  color: theme.colors.$primary,
                  marginRight: 8
                }}
              >
                {item.id}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: theme.colors.$foreground,
                  fontFamily: "LatoBold"
                }}
              >
                Lap
              </Text>
              <>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "LatoBold",
                    textAlign: "right",
                    color: theme.colors.$primary,
                    flex: 1
                  }}
                >
                  {item.item}
                </Text>
              </>
            </View>
          );
        }}
      />
    </View>
  );
}

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  const { theme } = useContext(CustomThemeContext);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.btn}>
        <Text
          style={{
            color: theme.colors.$base,
            fontFamily: "LatoBold",
            fontSize: 22
          }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};
