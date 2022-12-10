import * as React from "react";
import type { ListRenderItemInfo } from "react-native";
import {
  Animated,
  Easing,
  FlatList,
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { MaterialIcons as Icon } from "@expo/vector-icons";
// eslint-disable-next-line import/order
import { useHeaderHeight } from "@react-navigation/elements";

import { showToast } from "App";

import { COLORS, FONTS, SIZES } from "~/constants";
import { DEMOS } from "~/data/appDemos";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    ...FONTS.body1,
    height: 80,
    paddingTop: 4,
    textAlign: "center"
  },
  navBar: {
    alignItems: "center",
    flexDirection: "row",
    height: 64,
    marginBottom: 16
  }
});

interface ScreenItemProps {
  data: ListRenderItemInfo<typeof DEMOS[0]>;
  isGrid: boolean;
  onScreenClicked: () => void;
}
const ScreenItem = ({ data, isGrid, onScreenClicked }: ScreenItemProps) => {
  const { index, item } = data;
  const ITEM_SIZE = isGrid ? (SIZES.width - 36) / 2 : SIZES.width - 24;
  const translateY = React.useRef<Animated.Value>(
    new Animated.Value(50)
  ).current;
  const opacity = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true
      })
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        margin: 8,
        transform: [{ translateY }]
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          opacity: item.component === "" ? 0.4 : 1.0 // Faded if Template is not available
        }}
        source={require("../../assets/placeholder.jpeg")}
        resizeMode="contain"
      />
      <Pressable
        style={({ pressed }) => [
          {
            borderRadius: 4,
            ...StyleSheet.absoluteFillObject,
            opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
          }
        ]}
        android_ripple={{ color: "rgba(128,128,128,0.3)" }}
        onPress={onScreenClicked}
      />
    </Animated.View>
  );
};

export const HomeScreen = ({ navigation }: any) => {
  const inset = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const [isGrid, setIsGrid] = React.useState(true);
  const marginTop =
    Platform.OS === "ios" ? inset.top : StatusBar.currentHeight ?? 24;

  const onTemplateClicked = (item: typeof DEMOS[0]) => {
    if (item.component) {
      navigation.navigate(item.component);
    } else {
      showToast("Working on it...");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop }} edges={["left", "right"]}>
      <View style={styles.navBar}>
        <Pressable
          style={({ pressed }) => [
            {
              marginTop: 8,
              marginLeft: 8,
              opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
            }
          ]}
          onPress={() => true}
          android_ripple={{
            color: COLORS.gray,
            radius: 20,
            borderless: true
          }}
        >
          <Icon name={"menu"} size={SIZES.padding} color={COLORS.black} />
        </Pressable>
        <Text style={styles.header}>30 Days{"\n"} of React Native</Text>

        <Pressable
          style={({ pressed }) => [
            {
              marginTop: 8,
              marginRight: 8,
              opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
            }
          ]}
          onPress={() => setIsGrid(!isGrid)}
          android_ripple={{
            color: "grey",
            radius: 20,
            borderless: true
          }}
        >
          <Icon
            name={isGrid ? "dashboard" : "view-agenda"}
            size={SIZES.padding}
            color="black"
          />
        </Pressable>
      </View>

      <FlatList
        key={isGrid ? "G" : "L"}
        style={{ marginTop: headerHeight, marginHorizontal: 8 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: inset.bottom
        }}
        data={DEMOS}
        keyExtractor={(item) => item.name}
        numColumns={isGrid ? 2 : 1}
        renderItem={(data) => (
          <ScreenItem
            data={data}
            isGrid={isGrid}
            onScreenClicked={() => onTemplateClicked(data.item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
