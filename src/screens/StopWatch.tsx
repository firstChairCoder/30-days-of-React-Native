/* eslint-disable no-nested-ternary */
import { MaterialIcons as Icon } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  CustomThemeContext,
  CustomThemeProvider
} from "../store/CustomThemeProvider";

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", flex: 1, paddingHorizontal: 16 },
  header: {
    color: "#233554",
    fontFamily: "AlegreyaBold",
    fontSize: 28
  },
  headerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconCircle: {
    alignItems: "center",
    borderRadius: 32,
    borderWidth: 1,
    height: 32,
    justifyContent: "center",
    width: 32
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
  const { theme, changeTheme } = useContext(CustomThemeContext);

  function handleChange() {
    if (theme === "dark") {
      changeTheme("coffee");
    }
  }

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top * 1.5,
          backgroundColor:
            theme === "light"
              ? "#FFF"
              : theme === "dark"
              ? "#091A28"
              : "#F1E7D0"
        }
      ]}
    >
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Clock</Text>
        <View style={styles.iconCircle}>
          <Icon name={"settings"} color={"#000"} size={24} />
        </View>
      </View>

      <Text style={{ marginTop: 160, fontSize: 64, textAlign: "center" }}>
        Testing
      </Text>
      <Button title="Change Theme" onPress={handleChange} />
    </View>
  );
}
