import * as React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES } from "~/constants";
import Button from "~/components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    backgroundColor: COLORS.black,
    flex: 1,
    padding: SIZES.base * 2,
    paddingTop:
      SIZES.base + (Platform.OS === "ios" ? 0 : Constants.statusBarHeight)
  },
  body: {
    flexGrow: 1,
    marginVertical: SIZES.base * 2.5
  }
});

interface FormLayoutProps {
  children: React.ReactNode;
  onSave: () => void;
}

const FormLayout = ({ children, onSave }: FormLayoutProps) => {
  //   const { t } = useTranslation("settings");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView style={styles.body}>{children}</ScrollView>
        <Button label={"save"} onPress={onSave} />
      </View>
    </SafeAreaView>
  );
};

export default FormLayout;
